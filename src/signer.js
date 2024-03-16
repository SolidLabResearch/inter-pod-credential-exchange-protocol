const { login } = require("./util/login.js");
const {
  setupInbox,
  discoverInbox,
  sendMessage,
} = require("./util/notifications.js");
const { signDocument } = require("./util/signatures.js");
const { putResourceOnPod } = require("./util/util.js");
const { serverUrls } = require("./server.js");
const inputDocument = require("../data/inputDocument.json");

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
  password: "signer",
  webId: "http://localhost:3000/signer/profile/card#me",
};
const podUrl = serverUrls.baseUrl + signer_credentials.podName + "/"; // the '/' is importan!
const webIdProfileUrl = podUrl + "profile/card";
const initialDocUrl = podUrl + "private/initialDoc";

const setupSigner = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(signer_credentials);
  console.log("got credentials for %s", signer_credentials.podName);

  // 2-pre: discover pod description resources
  // TODO HEAD to get the .meta, then discover the correct location
  // discoverDescriptionResource(authFetch, podUrl)
  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl);

  // 3. put initial doc on the pod
  const result = await putResourceOnPod(
    authFetch,
    initialDocUrl,
    inputDocument,
  );
  console.log(
    "PUT intial document on %s's pod. Status: %s - %s",
    signer_credentials.podName,
    result.status,
    result.statusText,
  );

  return authFetch;
};

const signerCreateAndSignCredential = async () => {
  const result = await signDocument(inputDocument);
  console.log("Verificaton result: %s", result.verificationResult.verified);
  if (!result.verificationResult.verified) {
    console.log("aborting; could not sign document!");
    process.exit();
  }
  return result;
};

// pre. signer knows Alice's WebID (=holder)
// 1. signer fetches Alice's WebID to discover her inbox
// 2. signer POSTs a notification to the inbox (containing the signed document)
const signerSendCredentialToHolder = async (authFetch, signedDocument) => {
  // 1. discover inbox
  // TODO: can we can really assume Holders/Alice's WebId?
  const holderWebId = "http://localhost:3000/holder/profile/card#me";
  const inboxUrl = await discoverInbox(holderWebId);

  // 1-post: send document
  // TODO: JSON-LD?
  // TODO: properly generate UUID
  await sendMessage(inboxUrl, {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2),
    from: signer_credentials.webId,
    to: holderWebId,
    created_time: new Date().toISOString(),
    body: signedDocument,
  });
};

module.exports = {
  setupSigner,
  signerCreateAndSignCredential,
  signerSendCredentialToHolder,
};
