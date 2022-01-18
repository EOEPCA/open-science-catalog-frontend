<template>
  <v-row
    justify="center"
    align="center"
    style="margin: 1px"
  >
    <v-col v-for="theme in themes" :key="theme.name" cols="6">
      <v-img :src="`/img/EO_${theme.name.replace(/\s/g, '')}.jpeg`">
        <h1>{{ theme.name }}</h1>
      </v-img>
    </v-col>
  </v-row>
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
  }
}
</script>
