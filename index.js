const { checkCssIsAvailable } = require("./src/server");
const {
  setupSigner,
  signerCreateAndSignCredential,
  signerSendCredentialToHolder,
} = require("./src/signer");
const {
  setupHolder,
  holderDeriveProof,
  holderSendProofToVerifier,
  holderReceiveCredentials,
} = require("./src/holder");
const {
  setupVerifier,
  verifierRequestProofFromHolder,
  verifierVerify,
} = require("./src/verifier");

// Q: better start all pods at the same time or have them run separate?
const demo = async () => {
  // 0. make sure CSS runs and is available
  // - reset everything? -> using in-memory config; always resets
  // -> this will exit the whole process if the server doesn't run
  await checkCssIsAvailable();

  // 1. setup pods
  // - empty/reset them
  // - register/create user and password
  // - put (possible) default resources
  // - ACP/WAC? (WAC is easier, ACP does a bit more) TODO
  // - have them run idle
  // the setup scripts are separate, as the pods have access to different informations
  // TODO most of the setup (podUrl, inbox) can be simplified -> create better setup function?
  const signerAuthFetch = await setupSigner();
  const holderAuthFetch = await setupHolder();
  const verifierAuthFetch = await setupVerifier();

  // TODO: wait for signer, holder and verifier to be setup, then continue

  // 2a. Signer -> Holder
  const signedDocumentResult = await signerCreateAndSignCredential().then(
    console.log("# Issuer issued VC"),
  );
  await signerSendCredentialToHolder(
    signerAuthFetch,
    signedDocumentResult,
  ).then(console.log("# Issuer sent VC to Holder"));

  // 2b. Holder -> Verifier
  await holderReceiveCredentials(holderAuthFetch).then(async (result) => {
    console.log("# Holder consuming notification %s", result);
    await holderDeriveProof(result).then(async (result) => {
      console.log("# Holder created dervided VC: %s", result);
      console.log("# Holder send notification to Verifier");
      await holderSendProofToVerifier(result).then(async () => {
        console.log("# Verifier receive and process notification");
        await verifierVerify(verifierAuthFetch);
      });
    });
  });
};

demo();
