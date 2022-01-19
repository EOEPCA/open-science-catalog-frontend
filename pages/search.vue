<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5">
      Search
    </h2>
    <item-grid :items="items" />
  </v-container>
</template>

<script>
import ItemGrid from '@/components/ItemGrid.vue'

export default {
  name: 'Search',
  components: {
    ItemGrid
  },
  data () {
    return {
      items: [
        {
          title: 'ADDTID: An Alternative Tool for Studying Earthquake/Tsunami Signatures in the Ionosphere_Japan_SWARM',
          content: '- Solar activity'
        },
        {
          title: 'Aerosol (and dust aerosol) optical depth, averaged per overpass along 1x1 degree grid_Global_CALIPSO',
          content: '- Aerosols'
        },
        {
          title: 'Aerosol (and dust aerosol) optical depth_Global_CALIPSO',
          content: '- Aerosols'
        },
        {
          title: 'Aerosol (and dust aerosol) optical property profiles. Dust concentration profiles, along with the cloud-relevant dust number concentrations profiles_Global_CALIPSO',
          content: '- Aerosols'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      ]
    }
  }
}
</script>
