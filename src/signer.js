const { login } = require('./util/login.js')
const { setupInbox } = require('./util/notifications.js')
const { signDocument } = require('./util/signatures.js')
const { putResourceOnPod } = require('./util/util.js')
const { serverUrls } = require('./server.js')
const inputDocument = require("../data/inputDocument.json")

// the signer signs the credential document
// he/she/it knows the identity of the holder and is authorized/trusted to issue a document about the holder
// -> knows holder DID, WebID
// -> has all required informations to issue/sign the document

// TODO: is there a way to setup the authFetch as 'global static' method?
// or even better - bake in the auth credentials on the fly? as Singleton?

// TODO: read these from the `seed-pods.json` file?
const signer_credentials = {
  podName: "signer",
  email: "signer@solid.server",
  password: "signer"
}
const podUrl = serverUrls.baseUrl + signer_credentials.podName + '/' // the '/' is importan!
const webIdProfileUrl = podUrl + 'profile/card'
const initialDocUrl = podUrl + 'private/initialDoc'

const setupSigner = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(signer_credentials)
  console.log('got credentials for %s', signer_credentials.podName)

  // 2-pre: discover pod description resources
  // TODO HEAD to get the .meta, then discover the correct location
  // discoverDescriptionResource(authFetch, podUrl)
  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl)

  // 3. put initial doc on the pod
  const result = await putResourceOnPod(authFetch, initialDocUrl, inputDocument)
  console.log('PUT intial document on %s\'s pod. Status: %s - %s', signer_credentials.podName, result.status, result.statusText)

  return authFetch
}

const signerCreateAndSignCredential = async () => {
  const result = await signDocument(inputDocument)
  console.log('Verificaton result: %s', result.verificationResult.verified)
  if (!result.verificationResult.verified) {
    console.log("aborting; could not sign document successfully!")
    process.exit()
  }
}

// pre. signer knows Alice's WebID (=holder)
// 1. signer fetches Alice's WebID to discover her inbox
// 2. signer POSTs a notification to the inbox (containing the signed document)
const signerSendCredentialToHolder = async (authFetch) => {
  // 1. discover inbox
  // TODO: check if we can really assume Alice's WebId
  const holderWebId = 'http://localhost:3000/signer/profile/card#me'
  const inboxUrl = await discoverInbox(holderWebId, authFetch)

  // 1-post: send test notification
  sendMessage(inboxUrl, { hallo: "welt", test: true })

}

const discoverInbox = async (targetWebId, authFetch) => {
  const discoveryResult = await authFetch(targetWebId)
  console.log('discovering holder inbox via %s', targetWebId)
  //console.log(await discoveryResult.text()) // inbox is only in the .meta/headers currently
  const headers = discoveryResult.headers.get('link')
  console.log(headers)

  // first url that comes before 'ldp#inbox
  // note: regex needs to be excaped..
  const inboxRegexp = `\<(?<inbox>[\\w\\d\\s\\/:]*)\>[\\w\\d\\s;=]*("http:\\/\\/www.w3.org/ns/ldp#inbox")`
  //console.log(inboxRegexp)
  const matches = headers.match(inboxRegexp)
  const holderInbox = matches.groups['inbox']
  console.log('Discovered inbox: %s', holderInbox)
  // TODO: error checking

  return holderInbox
}

const sendMessage = async (inboxUrl, message) => {
  const stringifiedMessage = JSON.stringify(message, null, 2)
  console.log(stringifiedMessage)
  const result = await fetch(inboxUrl, {
    method: "POST",
    headers: {
      "content-type": "application/ld+json",
    },
    body: stringifiedMessage
  })

  // expect a 201 or 202 success
  console.log(result.status)
  console.log('notification to be found at %s', result.headers.get('location'))
}

module.exports = { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder }
