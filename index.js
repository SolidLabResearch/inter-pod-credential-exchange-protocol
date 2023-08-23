const { checkCssIsAvailable } = require("./src/server")
const { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder } = require("./src/signer")
const { setupHolder, holderDeriveProof, holderSendProofToVerifier } = require("./src/holder")
const { setupVerifier, verifierRequestProofFromHolder, verifierVerify } = require("./src/verifier")

// Q: better start all pods at the same time or have them run separate?
const demo = async () => {
  // 0. make sure CSS runs and is available
  // - reset everything? -> using in-memory config; always resets
  // -> this will exit the whole process if the server doesn't run
  await checkCssIsAvailable()

  // 1. setup pods 
  // - empty/reset them
  // - register/create user and password
  // - put (possible) default resources
  // - ACP/WAC? (WAC is easier, ACP does a bit more) TODO
  // - have them run idle
  // the setup scripts are separate, as the pods have access to different informations
  await setupSigner()
  await setupHolder()
  await setupVerifier()

  // TODO: wait for signer, holder and verifier to be setup, then continue

  // 2a. Signer -> Holder
  //await signerCreateAndSignCredential()
  //await signerSendCredentialToHolder()

  // TODO: only continue after the Holder holds the credential
  //  -> simulate the interaction between Holder and Verifier?

  // 2b. Holder -> Verifier
  // TODO how does the verifier notify the holder about the format and required revealed information on the derivation?
  verifierRequestProofFromHolder()
  holderDeriveProof()
  holderSendProofToVerifier()
  verifierVerify()
}

demo()
