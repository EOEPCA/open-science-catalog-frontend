export const state = () => ({});
export const actions = {
  async fetchCustomQuery(_, queryString) {
    try {
      const response = await this.$dynamicCatalog.$get(queryString);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchProducts(_, { projectID, page }) {
    try {
      const response = await this.$dynamicCatalog.$get(
        `/collections/${projectID}/items?offset=${page}`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
};
