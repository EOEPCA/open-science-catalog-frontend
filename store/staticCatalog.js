export const state = () => ({
  missions: null,
  summary: null,
  themes: null,
  allThemes: {},
  variables: {},
  products: {},
  projects: {}
})

export const mutations = {
  SET_MISSIONS (state, { items }) {
    state.missions = items.sort((a, b) => (b.name > a.name) ? -1 : 1)
  },
  SET_SUMMARY (state, { items }) {
    state.summary = items
  },
  SET_THEMES (state, { items }) {
    state.themes = items.sort((a, b) => (b.name > a.name) ? -1 : 1)
  },
  ADD_THEME (state, { theme, themeName }) {
    state.allThemes[themeName] = theme
  },
  ADD_VARIABLE (state, { variable, variableName }) {
    state.variables[variableName] = variable
  },
  ADD_PRODUCT (state, { product, productName }) {
    state.products[productName] = product
  },
  ADD_PROJECT (state, { project, projectName }) {
    state.projects[projectName] = project
  }
}

export const actions = {
  async fetchMetrics ({ commit }) {
    try {
      const metrics = await this.$staticCatalog.$get('/metrics')
      commit('SET_MISSIONS', { items: metrics.missions })
      commit('SET_SUMMARY', { items: metrics.summary })
      commit('SET_THEMES', { items: metrics.themes })
    } catch (error) {
      return error
    }
  },
  async fetchTheme ({ commit }, themeName) {
    try {
      const theme = await this.$staticCatalog.$get(`/themes/${themeName}`)
      commit('ADD_THEME', { theme, themeName })
    } catch (error) {
      return error
    }
  },
  async fetchVariable ({ commit }, variableName) {
    try {
      const variable = await this.$staticCatalog.$get(`/variables/${variableName}`)
      commit('ADD_VARIABLE', { variable, variableName })
    } catch (error) {
      return error
    }
  },
  async fetchProjects ({ commit }, projectName) {
    try {
      const project = await this.$staticCatalog.$get(`projects/${projectName}`)
      commit('ADD_PROJECT', { project, projectName })
    } catch (error) {
      return error
    }
  },
  async fetchProducts ({ commit }, productName) {
    try {
      const product = await this.$staticCatalog.$get(`products/${productName}`)
      commit('ADD_PRODUCT', { product, productName })
    } catch (error) {
      return error
    }
  },
  async retreiveMetrics ({ state, dispatch }) {
    if (!state.missions || !state.summary || !state.themes) {
      await dispatch('fetchMetrics')
    }
    return {
      missions: state.missions,
      summary: state.summary,
      themes: state.themes
    }
  },
  async retreiveTheme ({ state, dispatch }, themeName) {
    if (!state.allThemes[themeName]) {
      await dispatch('fetchTheme', themeName)
    }
    return state.allThemes[themeName]
  },
  async retreiveVariable ({ state, dispatch }, variableName) {
    if (!state.variables[variableName]) {
      await dispatch('fetchVariable', variableName)
    }
    return state.variables[variableName]
  },
  async retreiveProduct ({ state, dispatch }, productName) {
    if (!state.products[productName]) {
      await dispatch('fetchProducts', productName)
    }
    return state.products[productName]
  },
  async retreiveProjects ({ state, dispatch }, projectName) {
    if (!state.projects[projectName]) {
      await dispatch('fetchProjects', projectName)
    }
    return state.projects[projectName]
  }
}
