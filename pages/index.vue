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
          :to="`/themes/${theme.name.toLowerCase()}`"
        >
          <div
            class="d-flex align-center elevation-2 rounded"
            style="position: relative; height: 300px; overflow: hidden;
              border-bottom: 0.25em solid rgb(51, 94, 111);"
          >
            <img
              :src="withBase(theme.image.replace('/static/', '/'))"
              width="100%"
            >
            <span
              class="h1 imageLabel elevation-2"
            >
              {{ theme.name }}
            </span>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const themes = await $axios.$get('/themes')
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
