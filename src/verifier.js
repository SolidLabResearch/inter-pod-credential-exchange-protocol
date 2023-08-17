const { login } = require('./util/login.js')

// TODO: read these from the `seed-pods.json` file?
const verifier_credentials = {
  podName: "verifier",
  email: "verifier@solid.server",
  password: "verifier"
}

const setupVerifier = async () => {
  // 1. get/create the auth fetch
  const { accessToken, dpopKey, authFetch } = await login(verifier_credentials)
  console.log('got credentials for %s', verifier_credentials.podName)
}

const verifierRequestProofFromHolder = () => { }
const verifierVerify = () => { }


module.exports = { setupVerifier, verifierRequestProofFromHolder, verifierVerify }
