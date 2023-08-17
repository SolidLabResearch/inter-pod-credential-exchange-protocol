const { checkCssIsAvailable } = require("./server")
const { setupSigner, signerCreateAndSignCredential, signerSendCredentialToHolder } = require("./signer")
const { setupHolder, holderDeriveProof, holderSendProofToVerifier } = require("./holder")
const { setupVerifier, verifierRequestProofFromHolder, verifierVerify } = require("./verifier")

// Q: better start all pods at the same time or have them run separate?
const demo = async () => {
  // 0. make sure CSS runs and is available
  // - reset everything? -> using in-memory config; always resets
  checkCssIsAvailable()

  // 1. setup pods 
  // - empty/reset them
  // - register/create user and password
  // - put (possible) default resources
  // - ACP/WAC? (WAC is easier, ACP does a bit more)
  // - have them run idle
  // the setup scripts are separate, as we 
  setupSigner()
  setupHolder()
  setupVerifier()

  // TODO: wait for signer, holder and verifier to be setup, then continue

  // 2a. Signer -> Holder
  signerCreateAndSignCredential()
  signerSendCredentialToHolder()

  // TODO: only continue after the Holder holds the credential
  //  -> simulate the interaction between Holder and Verifier?

  // 2b. Holder -> Verifier
  verifierRequestProofFromHolder()
  holderDeriveProof()
  holderSendProofToVerifier()
  verifierVerify()
}

demo()
