// TODO move to util? probably not

// this is the 'global' address of the server. 
// it should be imported from here
const serverUrls = {
  baseUrl: 'http://localhost:3000/',
  IdpUrl: this.baseUrl + 'idp/register/'
}

const checkCssIsAvailable = async () => {
  fetch(serverUrls.baseUrl, {
    method: "GET",
  }).then(response => response)
    .then(data => {
      console.log("server is up")
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log("aborting; server is down!")
      process.exit()
    });
}

module.exports = { checkCssIsAvailable, serverUrls }
