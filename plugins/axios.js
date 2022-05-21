const getUriWithParam = (baseUrl, params) => {
  const Url = new URL(baseUrl)
  const urlParams = new URLSearchParams(Url.search)
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key])
    }
  }
  Url.search = urlParams.toString()
  return Url.toString()
}

export default function ({ $axios }, inject) {
  const staticCatalog = $axios.create()
  staticCatalog.setBaseURL('https://metadata.osc.develop.eoepca.org/open-science-catalog-metadata')
  staticCatalog.baseToReplace = 'https://eoepca.github.io/open-science-catalog-metadata'
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
  dynamicCatalog.setBaseURL('https://resource-catalogue.osc.develop.eoepca.org')
  // Add "f=json" query param to all requests going to the dynamic catalog
  dynamicCatalog.onRequest((config) => {
    const newUrl = getUriWithParam(config.baseURL + config.url, { f: 'json' })
    return {
      ...config,
      url: newUrl
    }
  })
  inject('dynamicCatalog', dynamicCatalog)
}
