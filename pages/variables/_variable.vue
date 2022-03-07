<template>
  <div v-if="variable">
    <bread-crumb-nav
      :theme="variable['osc:theme']"
      :variable="variable.id"
    />
    <div
      class="pb-4 variableHeaderContainer"
    >
      <v-container>
        <v-row class="ml-2">
          <span class="mt-3 mb-5 text-h2">
            {{ variable.id }}
          </span>
        </v-row>
        <v-row class="ml-2 pt-0 mt-0 mb-4">
          <v-chip
            color="rgb(124, 69, 86)"
            dark
          >
            {{ variable['osc:theme'] }}
          </v-chip>
        </v-row>
        <v-row class="ml-2">
          <span>
            {{ variable.description }}
          </span>
        </v-row>
      </v-container>
    </div>
    <v-container class="px-6 mx-6">
      <v-row class="pa-6">
        <span class="text-h4">
          Records
        </span>
        <v-spacer />
        <v-text-field
          v-model="recordsSearch"
          hide-details
          solo
          outlined
          single-line
          style="width: 400px !important; flex-grow: 0"
          label="Search records"
          prepend-inner-icon="mdi-magnify"
          @input="filterRecords"
        />
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="recordsFilterSortBy"
            :items="recordsFilterOptions"
            label="Sort by"
            outlined
            @change="filterRecords()"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="recordsFilterOrder"
            :items="['Ascending', 'Descending']"
            label="Order"
            outlined
            @change="filterRecords()"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            v-if="metrics"
            v-model="recordsFilterMission"
            :items="metrics.missions.map(m => m.name).sort()"
            label="Satellite mission"
            outlined
          />
        </v-col>
      </v-row>
    </v-container>
    <item-grid
      type="records"
      :items="records"
    />
  </div>
</template>

<script>
import BreadCrumbNav from '@/components/BreadCrumbNav.vue'

export default {
  name: 'VariableSingle',
  components: {
    BreadCrumbNav
  },
  data () {
    return {
      variable: null,
      records: [],
      recordsSearch: '',
      recordsFilterOptions: [
        {
          text: 'Name',
          value: 'title'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      recordsFilterSortBy: 'title',
      recordsFilterOrder: 'Ascending',
      recordsFilterMission: null,
      metrics: null
    }
  },
  head () {
    return {
      title: this.$route.params.variable.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  watch: {
    recordsFilterMission () {
      this.filterRecords()
    }
  },
  async created () {
    // todo handle variable names divided by '_'
    await this.$staticCatalog.$get(`variables/${this.$route.params.variable}`).then((res) => {
      this.variable = res
    }).catch((err) => {
      console.log(err)
    })

    // format records
    await Promise.all(this.variable.links.map(async (link) => {
      if (link.rel === 'item') {
        const recordResponse = await this.$staticCatalog.$get(`/products/${link.href.slice(0, -5)}`)
        this.records.push(recordResponse)
      }
    }))

    this.metrics = await this.$staticCatalog.$get('/metrics')
  },
  methods: {
    async filterRecords () {
      // const queryString = `/collections/metadata:main/items?type=dataset&q=${str}&sortby=${this.recordsFilterSortBy}`
      // TODO proper filtering (todo on backend)
      const queryString = `/collections/metadata:main/items?type=dataset${
        `&q=${this.$metaInfo.title}`}${
          (this.recordsSearch ? `&q=${this.recordsSearch}` : '')}${
            (this.recordsFilterMission ? `&q=${this.recordsFilterMission}` : '')}&sortby=${
              this.recordsFilterSortBy}`
      const recordsResponse = await this.$dynamicCatalog.$get(queryString)

      if (this.recordsFilterOrder === 'Descending') {
        this.records = recordsResponse.features.reverse()
      }
      this.records = recordsResponse.features
    }
  }
}
</script>

<style>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
</style>
