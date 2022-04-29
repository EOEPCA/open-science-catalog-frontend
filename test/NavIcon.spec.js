import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { createLocalVue, mount } from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue'

describe('DefaultLayout', () => {
  let localVue
  let vuetify
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue() // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify()
  })
  it('reveals sidebar', () => {
    const getters = {
      appVersion: () => '0.0.1'
    }
    const mockStore = new Vuex.Store({
      getters
    })
    wrapper = mount(DefaultLayout, {
      mocks: {
        $dynamicCatalog: { defaults: { baseURL: '#' } },
        $auth: { loggedIn: true }
      },
      localVue,
      store: mockStore,
      vuetify
    })
    // console.log(wrapper.html())
    const homeButton = wrapper.find('.v-list-item__title')
    expect(homeButton.text()).toContain('Home')
  })
})
