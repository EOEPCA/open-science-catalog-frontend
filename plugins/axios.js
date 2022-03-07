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
  const metadataApi = $axios.create()
  metadataApi.setBaseURL('https://eoepca.github.io/open-science-catalog-metadata')
  // Add ".json" to all requests going to the static catalog
  metadataApi.onRequest((config) => {
    const newUrl = `${config.url}.json`
    return {
      ...config,
      url: newUrl
    }
  })
  inject('metadataApi', metadataApi)

  const catalogApi = $axios.create()
  catalogApi.setBaseURL('https://resource-catalogue.osc.develop.eoepca.org')
  // Add "f=json" query param to all requests going to the dynamic catalog
  catalogApi.onRequest((config) => {
    const newUrl = getUriWithParam(config.baseURL + config.url, { f: 'json' })
    return {
      ...config,
      url: newUrl
    }
  })
  inject('catalogApi', catalogApi)
}
