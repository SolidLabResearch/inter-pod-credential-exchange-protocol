const { login } = require('./util/login.js')
const { serverUrls } = require('./server.js')
const { setupInbox, discoverNotifications, discoverInbox, getNotification } = require('./util/notifications.js')
const { putResourceOnPod } = require('./util/util.js')

// TODO: read these from the `seed-pods.json` file?
const holder_credentials = {
  podName: "holder",
  email: "holder@solid.server",
  password: "holder",
  webId: 'http://localhost:3000/holder/profile/card#me'
}
const podUrl = serverUrls.baseUrl + holder_credentials.podName + '/' // the '/' is importan!
const webIdProfileUrl = podUrl + 'profile/card'
const originalDocumentUrl = podUrl + 'private/original'
const derivationUrl = podUrl + 'private/derivation'

const setupHolder = async () => {
  // 1. login and get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(holder_credentials)
  console.log('got credentials for %s', holder_credentials.podName)

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl)
  console.log('holder inbox is at %s', inboxUrl)

  return authFetch
}

const holderReceiveCredentials = async (authFetch) => {
  console.log('Discovering notifications')
  // 1. discover all the notifications in the inbox
  const inboxUrl = await discoverInbox(holder_credentials.webId)
  const notificationUrls = await discoverNotifications(inboxUrl)

  // 2. read the notifications one-by-one
  // - delete/mark read?
  // - find the first notification from the Signer?
  // - how do we know we are looking for something from the Signer? -> There is another implicit interaction between Signer and Holder
  console.log('readings notifications')
  // find the notification from the Signer
  const match = notificationUrls.find(async (url) => {
    const notificationUrl = inboxUrl + url
    const notification = await getNotification(notificationUrl)
    const notificationText = await notification.text()
    const notificationJson = await JSON.parse(notificationText)

    if (notificationJson.sender = 'http://localhost:3000/signer/profile/card#me') {
      console.log('Found a match! %s', notificationUrl)

      // 3. save the signed document at a secure place
      const result = await putResourceOnPod(authFetch, originalDocumentUrl, notificationJson.content)
      console.log(result.status)

      // 3-post. verify the result
      const v = await authFetch(originalDocumentUrl)
      console.log('read stored document %s', v.status)
      console.log(v.headers)
      console.log(await v.text())


      return true
    }
    return false

  })
  console.log('FOUND! %s', match)

}



const holderDeriveProof = () => { }
const holderSendProofToVerifier = () => { }



module.exports = { setupHolder, holderDeriveProof, holderSendProofToVerifier, holderReceiveCredentials }
