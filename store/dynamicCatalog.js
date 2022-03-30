/* eslint-disable @typescript-eslint/no-unused-vars */
export const state = () => ({})
export const actions = {
  async fetchCustomQuery ({ commit }, queryString) {
    try {
      const response = await this.$dynamicCatalog.$get(queryString)
      return response
    } catch (error) {
      return error
    }
  },
  async fetchProducts ({ commit }, { projectID, page }) {
    try {
      const response = await this.$dynamicCatalog.$get(`/collections/${projectID}/items?offset=${page}`)
      return response
    } catch (error) {
      return error
    }
  }
}
