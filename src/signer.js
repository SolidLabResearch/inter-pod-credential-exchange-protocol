const { login } = require('./util/login.js')
const { severUrls, serverUrls } = require('./server.js')

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
const initialDocUrl = serverUrls.baseUrl + signer_credentials.podName + '/private/initialDoc'

const setupSigner = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(signer_credentials)
  console.log('got credentials for signer')

  // 2. put initial doc on the pod
  await authFetch(pathOnServer, {
    method: "PUT",
    headers: {
      "content-type": "application/ld+json",
      "rel": "http://www.w3.org/ns/json-ld#context"
    },
    body: JSON.stringify(document, null, 2)
  })





}

const signerCreateAndSignCredential = () => { }

const signerSendCredentialToHolder = () => { }

module.exports = { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder }
