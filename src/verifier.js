const { login } = require("./util/login.js");
const { serverUrls } = require("./server.js");
const {
  setupInbox,
  discoverNotifications,
  discoverInbox,
  sendMessage,
  getNotification,
} = require("./util/notifications.js");
const { verifyDocument } = require("./util/signatures.js");

const verifier_credentials = {
  podName: "verifier",
  email: "verifier@solid.server",
  password: "verifier",
  webId: "http://localhost:3000/verifier/profile/card#me",
};

const podUrl = serverUrls.baseUrl + verifier_credentials.podName + "/"; // the '/' is important!
const webIdProfileUrl = podUrl + "profile/card";

const setupVerifier = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(verifier_credentials);
  console.log("got credentials for %s", verifier_credentials.podName);

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl);
  console.log("verifier inbox is at %s", inboxUrl);
};

const verifierVerify = async (authFetch) => {
  console.log("Verifier: Discovering notifications");

  // 1. discover all the notifications in the inbox
  const inboxUrl = await discoverInbox(verifier_credentials.webId);
  const notificationUrls = await discoverNotifications(inboxUrl);

  // 2. read the notifications one-by-one
  // - delete/mark read?
  // - find the first notification from the Signer?
  // - how do we know we are looking for something from the Signer? -> There is another implicit interaction between Signer and Verifier
  console.log("Verifier: filtering notifications");
  // find the notification from the Signer
  const match = await notificationUrls.find(async (url) => {
    const notificationUrl = inboxUrl + url;
    const notification = await getNotification(notificationUrl);
    const notificationText = await notification.text();
    const notificationJson = await JSON.parse(notificationText);

    if (
      (notificationJson.from = "http://localhost:3000/holder/profile/card#me")
    ) {
      console.log(
        "Verifier: Received message from Holder! %s",
        notificationUrl,
      );

      // 3-post. verify the result
      console.log(
        "Verifier: consuming the received credential and verifying it",
      );
      console.log("Verifier: notification type is %s", notificationJson.type);
      console.log(notificationJson.body);
      const result = await verifyDocument(notificationJson.body);
      console.log("Verifier: Verification result %s", result);

      return true;
    }
    console.log("Verifier: didn't find any notification, aborting.");
    return false;
  });
};

module.exports = {
  setupVerifier,
  verifierVerify,
};
