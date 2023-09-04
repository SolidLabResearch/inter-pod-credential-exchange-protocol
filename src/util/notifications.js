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
// DONE Should we instead advertise the inbox in the webid-profile? See https://solid.github.io/webid-profile/#inbox -> yes.
const setupInbox = async (authFetch, podUrl, webIdProfileUrl) => {
  console.log('setting up inbox for %s', podUrl)

  const inboxUrl = podUrl + 'inbox/'

  // 1. Create (PUT) the inbox/ container
  // This will 409 if called again
  // Also create the inbox ACL
  await createInbox(inboxUrl, authFetch)
  await createInboxAcl(inboxUrl, authFetch)

  // 2. PATCH .meta to add the ldb#inbox
  await patchWebIdMeta(webIdProfileUrl, inboxUrl, authFetch)

  // 2-post. check if the link headers were set up correctly
  await checkLinkHeaders(webIdProfileUrl, authFetch)


  // TODO: only return if everything above completed successfully
  return inboxUrl
}


const createInbox = async (inboxUrl, authFetch) => {
  const putInboxResult = await authFetch(inboxUrl, {
    method: "PUT"
  })
  console.log('PUT inbox container. Status: %s - %s', putInboxResult.status, putInboxResult.statusText)
}

const patchWebIdMeta = async (webIdProfileUrl, inboxUrl, authFetch) => {

  const metaResourceUrl = webIdProfileUrl + '.meta'

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

  // TODO check for inbox creation
  // TODO check for 205 and 409
  if (patchResult.status < 200 && patchResult.status >= 300) {
    console.log("aborting; failed to patch inbox!")
    process.exit()
  }
}

const checkLinkHeaders = async (webIdProfileUrl, authFetch) => {
  const head = await authFetch(webIdProfileUrl, {
    method: "HEAD"
  })
  console.log('Link headers of %s:\n%s', webIdProfileUrl, head.headers.get('link'))
}

const createInboxAcl = async (inboxUrl, authFetch) => {
  const inboxAclUrl = inboxUrl + '.acl'
  console.log(inboxAclUrl)

  const inboxAclTtl = `
@prefix acl: <http://www.w3.org/ns/auth/acl#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.

<#public>
    a acl:Authorization;
    acl:agentClass foaf:Agent;
    acl:accessTo <./>;
    acl:default <./>;
    acl:mode acl:Read, acl:Append.
`

  const putInboxAclResult = await authFetch(inboxAclUrl, {
    method: "PUT",
    headers: {
      "content-type": "text/turtle",
    },
    body: inboxAclTtl
  })
  console.log('PUT inbox ACL. Status: %s - %s', putInboxAclResult.status, putInboxAclResult.statusText)
}

const discoverInbox = async (targetWebId) => {
  const discoveryResult = await fetch(targetWebId)
  console.log('discovering inbox via %s', targetWebId)
  const headers = discoveryResult.headers.get('link')
  console.log(headers)

  // first url that comes before 'ldp#inbox
  // note: regex needs to be excaped..
  const inboxRegexp = `\<(?<inbox>[\\w\\d\\s\\/:]*)\>[\\w\\d\\s;=]*("http:\\/\\/www.w3.org/ns/ldp#inbox")`
  //console.log(inboxRegexp)
  const matches = headers.match(inboxRegexp)
  const matchedInbox = matches.groups['inbox']
  console.log('Discovered inbox: %s', matchedInbox)
  // TODO: error checking

  return matchedInbox
}

const sendMessage = async (targetInboxUrl, message) => {
  console.log('sending message')
  const stringifiedMessage = JSON.stringify(message, null, 2)
  console.log(stringifiedMessage)
  const result = await fetch(targetInboxUrl, {
    method: "POST",
    headers: {
      "content-type": "application/ld+json",
    },
    body: stringifiedMessage
  })

  // expect a 201 or 202 success
  console.log(result.status)
  console.log('notification to be found at %s', result.headers.get('location'))
}

const discoverNotifications = async (inboxUrl) => {
  const discoveryResult = await fetch(inboxUrl)
  console.log('notifications discovery: status %s', discoveryResult.status)
  const body = await discoveryResult.text()
  console.log(body)
  const notificationUrls = parseNotifications(body)
  return notificationUrls
}

// TODO do this with an RDF lib :)
// this parses the 'ldp:contains' string and then finds the notification urls via regex
const parseNotifications = (input) => {
  // first get the full string with all notifications
  const notificationsRegexp = 'ldp\\:contains ([a-zA-Z0-9\\<\\>\\.\\,\\- ]*)'
  const notificationsString = input.match(notificationsRegexp);
  const matchedString = notificationsString[0]
  console.log(matchedString) // only the result

  // then filter for the single notifications (inside of the '<>')
  const singleNotificationRegex = '<([\\w\\d-]*)>'
  const matches = [...matchedString.matchAll(singleNotificationRegex)]

  const urls = new Array()
  matches.forEach((url) => {
    const urlString = url[1]
    console.log(urlString)
    urls.push(urlString)
  })

  return urls
}


module.exports = { setupInbox, discoverInbox, sendMessage, discoverNotifications }

// other:
// - use the authentication/authorization header with DID? >> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
