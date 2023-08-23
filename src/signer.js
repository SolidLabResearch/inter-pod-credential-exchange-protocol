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
}

const signerCreateAndSignCredential = async () => {
  const result = await signDocument(inputDocument)
  console.log('Verificaton result: %s', result.verificationResult.verified)
  if (!result.verificationResult.verified) {
    console.log("aborting; could not sign document successfully!")
    process.exit()
  }
}

// signer knows Alice's WebID (=holder)
// signer fetches WebID
const signerSendCredentialToHolder = () => {


}

module.exports = { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder }
