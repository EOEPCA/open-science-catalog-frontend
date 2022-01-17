import Vuetify from 'vuetify'

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
    wrapper = mount(DefaultLayout, {
      localVue,
      vuetify
    })
    // console.log(wrapper.html())
    const homeButton = wrapper.find('.v-list-item__title')
    expect(homeButton.text()).toContain('Home')
  })
})
