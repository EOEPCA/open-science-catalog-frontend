import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import withBase from '@/plugins/with-base'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.mixin(withBase)
