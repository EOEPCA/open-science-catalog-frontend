export const state = () => ({
  packageVersion: process.env.PACKAGE_VERSION || "0",
  showEmptyItems: false,
  products: null,
});

export const getters = {
  appVersion: (state) => state.packageVersion,
};

export const mutations = {
  TOGGLE_EMPTY_ITEMS(state) {
    state.showEmptyItems = !state.showEmptyItems;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

export const actions = {
  async fetchProducts({ commit }) {
    let items;
    await this.$dynamicCatalog
      .$get("/collections/metadata:main/items?type=collection")
      .then(async (itemsResponse) => {
        const additionalPages =
          itemsResponse.numberMatched / itemsResponse.numberReturned;
        let currPage = 1;
        for (let pageCount = 1; pageCount < additionalPages; pageCount++) {
          currPage++;
          await this.$dynamicCatalog
            .$get(
              `/collections/metadata:main/items?type=collection&limit=500&offset=${
                (currPage - 1) * 500
              }`
            )
            .then((response) => {
              itemsResponse.features = [
                ...itemsResponse.features,
                ...response.features,
              ];
            })
            .catch((err) => console.error(err));
        }
        items = itemsResponse.features;
      })
      .catch((err) => console.error(err));
    const parsedProducts = items
      // TEMP
      .filter((i) => i["osc:type"] === "product")
      .map((i) => ({
        ...i,
        theme: i.themes[0].concepts.map((c) => c.id),
        variable: i["osc:variables"],
        project: i["osc:project"],
        "eo-mission": i["osc:missions"],
        region: i["osc:region"],
      }))
      .sort((a, b) =>
        a.title.localeCompare(b.title, "en", {
          sensitivity: "base",
        })
      );
    commit("SET_PRODUCTS", parsedProducts);
    return parsedProducts;
  },
  async retreiveProducts({ state, dispatch }) {
    if (!state.products) {
      await dispatch("fetchProducts");
    }
    return state.products;
  },
};
