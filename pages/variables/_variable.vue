<template>
  <div>
    <div
      class="pb-4 variableHeaderContainer"
    >
      <v-breadcrumbs
        class="mx-5 pt-2 navigationBreadcrumb"
        :items="navigationBreadcrumb"
      >
        <template #item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
          >
            <v-chip
              v-if="navigationBreadcrumb.indexOf(item) === navigationBreadcrumb.length - 1"
              color="green"
              dark
              small
              class="mr-2"
            >
              Variable
            </v-chip>
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
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
        />
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="recordsFilterSortBy"
            :items="['Name']"
            label="Sort by"
            outlined
          />
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="recordsFilterOrder"
            :items="['Ascending', 'Descending']"
            label="Order"
            outlined
          />
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="recordsFilterMission"
            :items="['CryoSat2']"
            label="Satellite mission"
            outlined
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VariableSingle',
  async asyncData ({ params }) {
    let variable
    // todo handle variable names divided by '_'
    await axios.get(`https://raw.githubusercontent.com/constantinius/open-science-catalog-builder/gh-pages/variables/${params.variable}.json`).then((res) => {
      variable = res.data
    }).catch((err) => {
      console.log(err)
    })

    return {
      variable
    }
  },
  data () {
    return {
      navigationBreadcrumb: [
        {
          text: 'ESA EO Catalogue',
          disabled: false,
          href: '/'
        }
      ],
      recordsSearch: '',
      recordsFilterSortBy: 'Name',
      recordsFilterOrder: 'Ascending',
      recordsFilterMission: 'CryoSat2'
    }
  },
  head () {
    return {
      title: this.$route.params.variable.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  created () {
    this.navigationBreadcrumb.push({
      text: this.variable['osc:theme'],
      disabled: false,
      href: `/themes/${this.variable['osc:theme']}`
    })
    this.navigationBreadcrumb.push({
      text: this.variable.id,
      disabled: false,
      href: `/variables/${this.variable.id.toLowerCase()}`
    })
  }
}
</script>

<style>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
</style>
