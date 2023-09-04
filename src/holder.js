const { login } = require('./util/login.js')
const { serverUrls } = require('./server.js')
const { setupInbox, discoverNotifications, discoverInbox } = require('./util/notifications.js')

// TODO: read these from the `seed-pods.json` file?
const holder_credentials = {
  podName: "holder",
  email: "holder@solid.server",
  password: "holder",
  webId: 'http://localhost:3000/holder/profile/card#me'
}
const podUrl = serverUrls.baseUrl + holder_credentials.podName + '/' // the '/' is importan!
const webIdProfileUrl = podUrl + 'profile/card'
const derivationUrl = podUrl + 'private/derivation'

const setupHolder = async () => {
  // 1. login and get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(holder_credentials)
  console.log('got credentials for %s', holder_credentials.podName)

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl)
  console.log('holder inbox is at %s', inboxUrl)
}

const holderReceiveCredentials = async () => {
  const inboxUrl = await discoverInbox(holder_credentials.webId)
  await discoverNotifications(inboxUrl)

}

const holderDeriveProof = () => { }
const holderSendProofToVerifier = () => { }



module.exports = { setupHolder, holderDeriveProof, holderSendProofToVerifier, holderReceiveCredentials }
