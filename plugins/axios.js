export default function ({
  $axios,
  $config: { staticEndpoint, staticBaseToReplace, dynamicEndpoint, backendEndpoint }
}, inject) {
  const staticCatalog = $axios.create()
  staticCatalog.setBaseURL(staticEndpoint)
  staticCatalog.baseToReplace = staticBaseToReplace
  // Add ".json" to all requests going to the static catalog
  staticCatalog.onRequest((config) => {
    const newUrl = `${config.url}.json`
    return {
      ...config,
      url: newUrl
    }
  })
  inject('staticCatalog', staticCatalog)

  const dynamicCatalog = $axios.create()
  dynamicCatalog.setBaseURL(dynamicEndpoint)
  // Add "f=json" query param to all requests going to the dynamic catalog
  dynamicCatalog.onRequest((config) => {
    const newUrl = `${config.url}&f=json`
    return {
      ...config,
      url: newUrl
    }
  })
  inject('dynamicCatalog', dynamicCatalog)

  const metadataBackend = $axios.create()
  metadataBackend.setBaseURL(backendEndpoint)
  inject('metadataBackend', metadataBackend)
}
