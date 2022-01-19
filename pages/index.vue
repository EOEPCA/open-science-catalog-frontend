<template>
  <v-container fluid style="height: 100%;" class="pa-0">
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <v-col v-for="theme in themes" :key="theme.name" cols="6" class="pa-1">
        <nuxt-link
          :to="`/themes/${theme.name.toLowerCase()}`"
        >
          <v-img
            :src="withBase(`/img/EO_${theme.name.replace(/\s/g, '')}.jpeg`)"
            height="300"
            class="elevation-2 rounded"
            style="border-bottom: 0.25em solid rgb(51, 94, 111);"
          >
            <span class="h1 imageLabel elevation-2">
              {{ theme.name }}
            </span>
          </v-img>
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
  position: relative;
  text-transform: uppercase;
  padding: 3px 10px;
  top: 37%;
  left: 13%;
  font-size: 22px;
  font-weight: bold;
}
</style>
