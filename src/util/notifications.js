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

// defaults to 'podName/inbox/'
// DONE do we need to also create the inbox/ resource? >> Yes.
// TODO Should we instead advertise the inbox in the webid-profile? See https://solid.github.io/webid-profile/#inbox
const setupInbox = async (authFetch, podUrl, webIdProfileUrl) => {
  console.log('setting up inbox for %s', podUrl)

  const metaResourceUrl = webIdProfileUrl + '.meta'
  const inboxUrl = podUrl + 'inbox/'

  console.log('meta: %s\ninbox: %s', metaResourceUrl, inboxUrl)

  // 1. Create (PUT) the inbox/ container
  // This will 409 if called again
  const putInboxResult = await authFetch(inboxUrl, {
    method: "PUT"
  })
  console.log('PUT inbox container. Status: %s - %s', putInboxResult.status, putInboxResult.statusText)

  // 2. PATCH .meta to add the ldb#inbox
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "text/n3"
    },
    body: `@prefix solid: <http://www.w3.org/ns/solid/terms#>.
<> a solid:InsertDeletePatch;
solid:inserts { <${webIdProfileUrl}> <http://www.w3.org/ns/ldp#inbox> <${inboxUrl}>. }.`

  }
  const patchResult = await authFetch(metaResourceUrl, options)
  console.log('Patching inbox location. Status: %s - %s', patchResult.status, patchResult.statusText)

  // 2-post. check if the link headers were set up correctly
  const head = await authFetch(webIdProfileUrl, {
    method: "HEAD"
  })
  console.log('Link headers of %s:\n%s', webIdProfileUrl, head.headers.get('link'))

  // TODO check for inbox creation
  // TODO check for 205 and 409
  if (patchResult.status < 200 && patchResult.status >= 300) {
    console.log("aborting; failed to patch inbox!")
    process.exit()
  }

  return inboxUrl
}

module.exports = { setupInbox }

// other:
// - use the authentication/authorization header with DID? >> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
