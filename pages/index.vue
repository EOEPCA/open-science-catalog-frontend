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
              :src="withBase(`/img/EO_${theme.name.replace(/\s/g, '')}.jpeg`)"
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
  data () {
    return {
      themes: [
        {
          name: 'Atmosphere'
        },
        {
          name: 'Cryosphere'
        },
        {
          name: 'Land'
        },
        {
          name: 'Magnetic Ionosphere'
        },
        {
          name: 'Oceans'
        },
        {
          name: 'Solid Earth'
        }
      ]
    }
  },
  options: {
    customProperties: true
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
