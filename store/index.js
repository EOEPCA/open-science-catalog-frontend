export const state = () => ({
  packageVersion: process.env.PACKAGE_VERSION || '0',
  showEmptyItems: false
})

export const getters = {
  appVersion: state => state.packageVersion
}

export const mutations = {
  TOGGLE_EMPTY_ITEMS (state) {
    state.showEmptyItems = !state.showEmptyItems
  }
}
