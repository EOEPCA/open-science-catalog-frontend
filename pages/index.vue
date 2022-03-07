<template>
  <v-container fluid style="height: 100%;" class="pa-0">
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <v-col
        v-for="theme in themes"
        :key="theme.name"
        cols="12"
        md="6"
        class="pa-1"
      >
        <nuxt-link
          :to="`/themes/${slugify(theme.name)}`"
        >
          <div
            class="d-flex align-center elevation-2 rounded"
            style="position: relative; height: 300px; overflow: hidden;
              border-bottom: 0.25em solid rgb(51, 94, 111);"
          >
            <v-img
              :src="`${$staticCatalog.defaults.baseURL}/themes/${theme.image}`"
              width="100%"
              height="100%"
            >
              <span
                class="h1 imageLabel elevation-2"
              >
                {{ theme.name.replace('_', ' ') }}
              </span>
            </v-img>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $staticCatalog }) {
    const metricsResponse = await $staticCatalog.$get('/metrics')
    const themes = metricsResponse.themes.sort((a, b) => (b.name > a.name) ? -1 : 1)
    return {
      themes
    }
  },
  head: {
    titleTemplate: 'ESA Open Science Data'
  }
}
</script>

<style>
.imageLabel {
  background: #003247;
  color: white;
  position: absolute;
  text-transform: uppercase;
  padding: 1px 10px;
  top: 37%;
  left: 15%;
  font-size: 21px;
  font-weight: bold;
}
</style>
