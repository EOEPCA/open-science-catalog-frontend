<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">
      Contributions status
    </h2>
    <v-row class="d-flex justify-center text-h6">
      <v-col cols="12">
        <v-icon>
          mdi-information-outline
        </v-icon>
        Note: only your most recent contributions are shown in this list. For a full list of contributions,
        please refer to the
        <a href="https://github.com/EOEPCA/open-science-catalog-metadata/pulls" target="_blank" style="text-decoration: none;">
          Open Science Catalog Metadata GitHub Repository
        </a>.
      </v-col>
    </v-row>
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
            v-for="itemType in Object.keys(pendingItems)"
          >
            <v-subheader
              :key="itemType"
              class="text-capitalize text-h4"
              style="padding: 0 0 0 0;"
            >
              {{ itemType }}
            </v-subheader>
            <div
              v-if="pendingItems[itemType].length === 0"
              :key="itemType"
              class="text-h6"
            >
              No available items
            </div>
            <v-list-item
              v-for="(item, key) in pendingItems[itemType]"
              :key="`${itemType}-${key}`"
              class="pl-0"
            >
              <v-list-item-avatar>
                <v-icon
                  :class="getStatusStyle(itemType).color"
                  dark
                >
                  {{ getStatusStyle(itemType).icon }}
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <strong>{{ item.change_type }} request</strong>: {{ item.filename }}
                </v-list-item-title>

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
                  :href="item.url"
                  target="_blank"
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
  middleware: 'auth',
  data: () => ({
    pendingItems: {},
    loaded: false
  }),
  head: {
    title: 'Contributions Status'
  },
  async created () {
    const themes = await this.$metadataBackend.$get('/item-requests/themes')
    const variables = await this.$metadataBackend.$get('/item-requests/variables')
    const projects = await this.$metadataBackend.$get('/item-requests/projects')
    const products = await this.$metadataBackend.$get('/item-requests/products')
    this.pendingItems = {
      Pending: [],
      Accepted: [],
      Rejected: []
    }
    themes.items.forEach((item) => {
      this.pendingItems[item.state].push(item)
    })
    variables.items.forEach((item) => {
      this.pendingItems[item.state].push(item)
    })
    projects.items.forEach((item) => {
      this.pendingItems[item.state].push(item)
    })
    products.items.forEach((item) => {
      this.pendingItems[item.state].push(item)
    })
    this.loaded = true
  },
  methods: {
    getStatusStyle (type) {
      const styling = {
        color: '',
        icon: ''
      }
      switch (type) {
        case 'Pending':
          styling.color = 'warning'
          styling.icon = 'mdi-progress-clock'
          break
        case 'Accepted':
          styling.color = 'success'
          styling.icon = 'mdi-progress-check'
          break
        case 'Rejected':
          styling.color = 'error'
          styling.icon = 'mdi-progress-close'
      }
      return styling
    }
  }
}
</script>
