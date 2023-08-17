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

const setupSigner = () => {

}

const signerCreateAndSignCredential = () => { }

const signerSendCredentialToHolder = () => { }

module.exports = { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder }
