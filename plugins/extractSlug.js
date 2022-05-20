export default ({ $staticCatalog }, inject) => {
  inject('extractSlug', (item) => {
    let selfLink
    if (item) {
      const staticFormat = item.links?.find(l => l.rel === 'self')
      const dynamicFormat = item.properties?.associations?.find(l => l.name === 'self')
      if (staticFormat || dynamicFormat) {
        selfLink = staticFormat ? staticFormat.href : dynamicFormat.href
      }
    }
    return selfLink
      ? selfLink.replace($staticCatalog.defaults.baseURL, '')
        .replace('/projects/', '')
        .replace('/products/', '')
        .replace('.json', '')
      : undefined
  })
}
