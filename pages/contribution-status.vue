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
        <v-data-table
          :headers="[
            {
              text: 'Item type',
              value: 'item_type'
            },
            {
              text: 'File name',
              value: 'filename'
            },
            {
              text: 'Status',
              value: 'state'
            },
            {
              text: 'Change type',
              value: 'change_type'
            },
            {
              text: 'Pull request',
              value: 'url'
            }
          ]"
          :items="contributionItems"
          class="elevation-1"
          :loading="!loaded"
          dense
          :items-per-page="20"
          :footer-props="{
            'items-per-page-options': [10, 20, 30, 40, 50]
          }"
        >
          <template #item.state="{ item }">
            <v-chip
              :color="getStatusStyle(item.state).color"
              small
              dark
            >
              <v-icon small left>
                {{ getStatusStyle(item.state).icon }}
              </v-icon>
              {{ item.state }}
            </v-chip>
          </template>
          <template #item.item_type="{ item }">
            <v-chip
              :color="$typeColor(item.item_type.toLowerCase())"
              small
              label
              dark
            >
              {{ item.item_type }}
            </v-chip>
          </template>
          <template #item.change_type="{ item }">
            <v-btn
              color="black"
              plain
              small
              class="px-0"
            >
              <v-icon
                small
                left
              >
                {{ getChangeIcon(item.change_type) }}
              </v-icon>
              {{ item.change_type }}
            </v-btn>
          </template>
          <template #item.url="{ item }">
            <v-btn
              color="black"
              plain
              small
              :href="item.url"
              target="_blank"
              class="px-0"
            >
              #{{ item.url.split('/')[item.url.split('/').length - 1] }}
              <v-icon
                small
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ContributionsStatus',
  middleware: 'auth',
  data: () => ({
    contributionItems: [],
    loaded: false
  }),
  head: {
    title: 'Contributions Status'
  },
  async created () {
    const [themes, variables, projects, products] = await Promise.all([
      this.$metadataBackend.$get('/item-requests/themes'),
      this.$metadataBackend.$get('/item-requests/variables'),
      this.$metadataBackend.$get('/item-requests/projects'),
      this.$metadataBackend.$get('/item-requests/products')
    ])
    this.contributionItems = [
      ...themes.items.map(item => ({ ...item, item_type: 'Theme' })),
      ...variables.items.map(item => ({ ...item, item_type: 'Variable' })),
      ...projects.items.map(item => ({ ...item, item_type: 'Project' })),
      ...products.items.map(item => ({ ...item, item_type: 'Product' }))
    ]
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
    },
    getChangeIcon (type) {
      let icon = ''
      switch (type) {
        case 'Add':
          icon = 'mdi-file-plus-outline'
          break
        case 'Update':
          icon = 'mdi-file-edit-outline'
          break
        case 'Delete':
          icon = 'mdi-file-remove-outline'
          break
      }
      return icon
    }
  }
}
</script>
