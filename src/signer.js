const { login } = require('./util/login.js')
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
const initialDocUrl = serverUrls.baseUrl + signer_credentials.podName + '/private/initialDoc'

const setupSigner = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(signer_credentials)
  console.log('got credentials for %s', signer_credentials.podName)

  // 2. put initial doc on the pod
  const result = await putResourceOnPod(authFetch, initialDocUrl, inputDocument)
  console.log('put intial document on %s\'s pod. Status: %s', signer_credentials.podName, result.status)
}

const signerCreateAndSignCredential = async () => {
  const result = await signDocument(inputDocument)
  console.log(result)


}

const signerSendCredentialToHolder = () => { }

module.exports = { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder }
