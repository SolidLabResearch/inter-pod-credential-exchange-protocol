const { login } = require('./util/login.js')
const { serverUrls } = require('./server.js')

// TODO: read these from the `seed-pods.json` file?
const holder_credentials = {
  podName: "holder",
  email: "holder@solid.server",
  password: "holder"
}
const derivationUrl = serverUrls.baseUrl + holder_credentials.podName + '/private/derivation'

const setupHolder = async () => {
  // 1. login and get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(holder_credentials)
  console.log('got credentials for %s', holder_credentials.podName)
}

const holderDeriveProof = () => { }
const holderSendProofToVerifier = () => { }



module.exports = { setupHolder, holderDeriveProof, holderSendProofToVerifier }
