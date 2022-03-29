export const state = () => ({
  missions: null,
  summary: null,
  themes: null
})

export const getters = {
  missions: state => state.missions,
  summary: state => state.summary,
  themes: state => state.themes
}

export const mutations = {
  SET_MISSIONS (state, { items }) {
    state.missions = items
  },
  SET_SUMMARY (state, { items }) {
    state.summary = items
  },
  SET_THEMES (state, { items }) {
    state.themes = items.sort((a, b) => (b.name > a.name) ? -1 : 1)
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
  async retreiveMetrics ({ state, dispatch }) {
    if (!state.missions || !state.summary || !state.themes) {
      await dispatch('fetchMetrics')
    }
  }
}
