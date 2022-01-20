import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || '0'
  },
  getters: {
    appVersion: state => state.packageVersion
  }
})

export default store
