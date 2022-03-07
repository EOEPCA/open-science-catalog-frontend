import Vue from 'vue'

const mixin = {
  methods: {
    slugify (string) {
      return string.replace(/[^a-zA-Z ]/g, '').replaceAll(' ', '-').toLowerCase()
    }
  }
}

Vue.mixin(mixin)

export default mixin
