const serverUrl = 'http://localhost:3000/'
const serverIdp = serverUrl + 'idp/register/'

const checkCssIsAvailable = async () => {
  fetch(serverUrl, {
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


module.exports = { checkCssIsAvailable }
