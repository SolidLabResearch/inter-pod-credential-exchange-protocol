const { login } = require('./util/login.js')
const { serverUrls } = require('./server.js')
const { setupInbox } = require('./util/notifications.js')

// TODO: read these from the `seed-pods.json` file?
const holder_credentials = {
  podName: "holder",
  email: "holder@solid.server",
  password: "holder"
}
const podUrl = serverUrls.baseUrl + holder_credentials.podName + '/' // the '/' is importan!
const derivationUrl = podUrl + 'private/derivation'

const setupHolder = async () => {
  // 1. login and get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(holder_credentials)
  console.log('got credentials for %s', holder_credentials.podName)

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl)
  console.log('holder inbox is at %s', inboxUrl)



}

const holderDeriveProof = () => { }
const holderSendProofToVerifier = () => { }



module.exports = { setupHolder, holderDeriveProof, holderSendProofToVerifier }
