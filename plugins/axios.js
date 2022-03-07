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
  inject('catalogApi', catalogApi)
}
