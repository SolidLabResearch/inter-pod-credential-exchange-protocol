// notification.js
// implements the LDN spec
// - https://www.w3.org/TR/ldn/
//
// Actors: Sender, Receiver, Consumer
//
// 1. Discover inbox (sender, consumber)
// 2. POST notification to inbox (sender)
// 3. GET inbox and notifications (consumer)
// 
// note: on CSS, due to security considerations and to prevent flooding an inbox by default, it is required to set up the inbox manually
// resource -> resource.meta

// we'll just default to /podName/inbox
// - TODO: reasons against this?
// TODO do we need to also create the /inbox resource?
const setupInbox = async (authFetch, podUrl) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "text/n3"
    },
    body: `@prefix solid: <http://www.w3.org/ns/solid/terms#>.
<> a solid:InsertDeletePatch;
solid:inserts { <http://localhost:3000/signer/> <http://www.w3.org/ns/ldp#inbox> <http://localhost:3000/signer/inbox/>. }.`

  }
  const result = await authFetch(podUrl + '.meta', options)
  console.log(result)
  console.log('Patching inbox. Status: %s %s', result.status, result.statusText)


  const head = await authFetch(podUrl + '.meta', {
    method: "HEAD"
  })
  console.log(head.headers)


}

module.exports = { setupInbox }

// other:
// - use the authentication/authorization header with DID? >> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
