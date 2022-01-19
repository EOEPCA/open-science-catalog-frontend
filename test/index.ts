import Vue from 'vue'
import Vuetify from 'vuetify'
import withBase from '@/plugins/with-base'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.mixin(withBase)
