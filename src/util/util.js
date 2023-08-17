
const putResourceOnPod = async (authFetch, targetUrl, resource) => {
  // TODO is it a resouce or a document? I _do_ assume JSON-LD

  const result = await authFetch(targetUrl, {
    method: "PUT",
    headers: {
      "content-type": "application/ld+json",
      "rel": "http://www.w3.org/ns/json-ld#context"
    },
    body: JSON.stringify(resource, null, 2)
  })
  return result
}

module.exports = { putResourceOnPod }
