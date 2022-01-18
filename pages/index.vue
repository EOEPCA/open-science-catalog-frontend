<template>
  <v-container fluid style="height: 100%;" class="pa-0">
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <v-col v-for="theme in themes" :key="theme.name" cols="6" class="pa-1">
        <v-img
          :src="`/img/EO_${theme.name.replace(/\s/g, '')}.jpeg`"
          height="300"
          class="elevation-2 rounded-sm"
        >
          <span class="h1 imageLabel elavation-2">
            {{ theme.name }}
          </span>
        </v-img>
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
          name: 'Magnetic ionosphere'
        },
        {
          name: 'Oceans'
        },
        {
          name: 'Solid earth'
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
  top: 30%;
  left: 20%;
  font-size: 25px;
  font-weight: bold;
}
</style>
