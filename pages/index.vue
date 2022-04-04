<template>
  <div>
    <v-container fluid class="mb-2">
      <v-row>
        <v-col>
          <h1 :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-5' : 'text-h4 mt-5'">
            Open science catalog
          </h1>
        </v-col>
      </v-row>
      <v-row class="bottomBorder">
        <v-col>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sollicitudin ex. Sed at orci at erat maximus molestie fermentum ac nulla. Mauris sagittis vulputate sollicitudin. Donec consectetur aliquet massa vel scelerisque. Sed venenatis tempus justo, scelerisque aliquet lacus mollis pulvinar. Suspendisse vitae iaculis velit. Curabitur tempor ultrices purus sit amet feugiat. Suspendisse in elit commodo, blandit ante ac, molestie nunc. Aliquam consequat eget justo tempor feugiat. Vestibulum dignissim vehicula tristique. Integer eget ultricies eros, eget accumsan mauris.
          <br>
          Mauris non lacus eget ex iaculis venenatis. Sed eget imperdiet quam. Aenean odio ligula, scelerisque et ante sed, tincidunt finibus odio. Nunc vestibulum dapibus ultrices. Vestibulum et vehicula elit. Praesent sit amet rhoncus velit. Praesent aliquam tincidunt velit, venenatis commodo eros accumsan ut. Nulla facilisi. Sed imperdiet leo tortor, in hendrerit mi congue ac. Aenean tellus orci, eleifend non molestie id, molestie a sem. Mauris risus justo, blandit eu ante iaculis, posuere fermentum dolor.
        </v-col>
      </v-row>
    </v-container>
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
          md="4"
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
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('staticCatalog/retreiveMetrics')
  },
  head: {
    titleTemplate: 'ESA Open Science Data'
  },
  computed: {
    ...mapState('staticCatalog', [
      'themes'
    ])
  },
  methods: {
    ...mapActions('staticCatalog', [
      'retreiveMetrics'
    ])
  }
}
</script>

<style>
.bottomBorder {
  border-bottom: 0.25em solid #335E6F;
}
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
