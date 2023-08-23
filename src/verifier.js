const { login } = require('./util/login.js')
const { serverUrls } = require('./server.js')
const { setupInbox } = require('./util/notifications.js')

// TODO: read these from the `seed-pods.json` file?
const verifier_credentials = {
  podName: "verifier",
  email: "verifier@solid.server",
  password: "verifier"
}

const podUrl = serverUrls.baseUrl + verifier_credentials.podName + '/' // the '/' is important!
const webIdProfileUrl = podUrl + 'profile/card'

const setupVerifier = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(verifier_credentials)
  console.log('got credentials for %s', verifier_credentials.podName)

  // 2. create LDN inbox
  const inboxUrl = await setupInbox(authFetch, podUrl, webIdProfileUrl)
  console.log('verifier inbox is at %s', inboxUrl)
}

const verifierRequestProofFromHolder = () => { }
const verifierVerify = () => { }


module.exports = { setupVerifier, verifierRequestProofFromHolder, verifierVerify }

