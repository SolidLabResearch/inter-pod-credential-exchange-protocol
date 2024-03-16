const { login } = require("./util/login.js");
const { serverUrls } = require("./server.js");
const {
  setupInbox,
  discoverNotifications,
  discoverInbox,
  sendMessage,
  getNotification,
} = require("./util/notifications.js");
const { deriveDocument } = require("./util/signatures.js");
const { putResourceOnPod } = require("./util/util.js");

// TODO: read these from the `seed-pods.json` file?
const holder_credentials = {
  podName: "holder",
  email: "holder@solid.server",
  password: "holder",
  webId: "http://localhost:3000/holder/profile/card#me",
};
const podUrl = serverUrls.baseUrl + holder_credentials.podName + "/"; // the '/' is importan!
const webIdProfileUrl = podUrl + "profile/card";
const originalDocumentUrl = podUrl + "private/original";
const derivationUrl = podUrl + "private/derivation";

const setupHolder = async () => {
  // 1. login and get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(holder_credentials);
  console.log("Holder: got credentials for %s", holder_credentials.podName);

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl);
  console.log("Holder: inbox is at %s", inboxUrl);

  return authFetch;
};

const holderReceiveCredentials = async (authFetch) => {
  console.log("Holder: Discovering notifications");
  // 1. discover all the notifications in the inbox
  const inboxUrl = await discoverInbox(holder_credentials.webId);
  const notificationUrls = await discoverNotifications(inboxUrl);

  // 2. read the notifications one-by-one
  // - delete/mark read?
  // - find the first notification from the Signer?
  // - how do we know we are looking for something from the Signer? -> There is another implicit interaction between Signer and Holder
  console.log("Holder: consuming notifications");
  // find the notification from the Signer
  const match = notificationUrls.find(async (url) => {
    const notificationUrl = inboxUrl + url;
    const notification = await getNotification(notificationUrl);
    const notificationText = await notification.text();
    const notificationJson = await JSON.parse(notificationText);

    if (
      (notificationJson.from = "http://localhost:3000/signer/profile/card#me")
    ) {
      console.log("Holder: Received message from Issuer! %s", notificationUrl);

      // 3. save the signed document at a secure place
      const result = await putResourceOnPod(
        authFetch,
        originalDocumentUrl,
        notificationJson.body,
      );
      console.log("Holder: saved VC at a secure location", result.status);

      // 3-post. verify the result
      //const v = await authFetch(originalDocumentUrl);
      // console.log("Holder: consuming it to derify a new VC -- %s", v.status);
      // console.log(v.headers);
      // console.log(await v.text());
      console.log("Holder: consuming the received credential");
      //console.log("Holder: notification type is %s", notificationJson.type);
      //console.log(notificationJson.body);
      holderDeriveProof(notificationJson.body);

      return true;
    }
    return false;
  });
  console.log("Holder: notification URI is %s", match);
};

const holderDeriveProof = async (document) => {
  console.log("Holder: deriving new VC");
  console.log(document);
  const result = await deriveDocument(document.signedDocument);
  console.log("Holder: derivation success");
  console.log("Holder: new document is %s", result.document);

  console.log("Holder: sending to Verifier");
  await holderSendProofToVerifier(result.document);
};
const holderSendProofToVerifier = async (document) => {
  const verifierWebId = "http://localhost:3000/verifier/profile/card#me";
  const inboxUrl = await discoverInbox(verifierWebId);

  // 1-post: send document
  await sendMessage(inboxUrl, {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2),
    from: holder_credentials.webId,
    to: verifierWebId,
    type: "https://example.org/IPCEP/transfer",
    created_time: new Date().toISOString(),
    body: document,
  }).then("# Holder send derived VC to Verifier");
};

module.exports = {
  setupHolder,
  holderDeriveProof,
  holderSendProofToVerifier,
  holderReceiveCredentials,
};
