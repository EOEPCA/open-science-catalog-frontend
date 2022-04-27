<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5">
      Pending Contributions
    </h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-list
          subheader
          two-line
          rounded
        >
          <div
            v-if="!loaded"
            class="d-flex justify-center pa-5 py-10"
          >
            <v-progress-circular
              indeterminate
              color="primary"
              :size="50"
            />
          </div>
          <template
            v-for="itemType in Object.keys(pendingItems).filter(k => pendingItems[k].items.length > 0)"
          >
            <!-- <v-subheader
              :key="itemType"
              class="text-capitalize"
            >
              {{itemType}}
            </v-subheader> -->

            <v-list-item
              v-for="(item, key) in pendingItems[itemType].items"
              :key="`${itemType}-${key}`"
            >
              <v-list-item-avatar>
                <v-icon
                  class="warning"
                  dark
                >
                  mdi-progress-clock
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item" />

                <v-list-item-subtitle>
                  <v-btn
                    dark
                    x-small
                    :color="$typeColor(itemType.replace('s', ''))"
                  >
                    {{ itemType.replace('s', '') }}
                  </v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  color="black"
                  dark
                  small
                >
                  <v-icon
                    left
                  >
                    mdi-github
                  </v-icon>
                  View on GitHub
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ContributionsStatus',
  data: () => ({
    pendingItems: {},
    loaded: false
  }),
  head: {
    title: 'Contributions Status'
  },
  async created () {
    const themes = await this.$axios.$get('https://open-science-catalog-backend.develop.eoepca.org/items/themes?filter=pending')
    const variables = await this.$axios.$get('https://open-science-catalog-backend.develop.eoepca.org/items/variables?filter=pending')
    const projects = await this.$axios.$get('https://open-science-catalog-backend.develop.eoepca.org/items/projects?filter=pending')
    const products = await this.$axios.$get('https://open-science-catalog-backend.develop.eoepca.org/items/products?filter=pending')
    this.pendingItems = {
      themes,
      variables,
      projects,
      products
    }
    this.loaded = true
  }
}
</script>
