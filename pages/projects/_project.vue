<template>
  <div v-if="project">
    <bread-crumb-nav
      :theme="project.collection"
      :project="project.properties.title"
    />
    <div
      class="pb-4 variableHeaderContainer"
    >
      <v-container>
        <v-row class="ml-2">
          <span class="mt-3 mb-5 text-h2">
            {{ project.properties['osc:name'] }}
            <v-chip
              color="green"
              dark
              label
            >
              {{ project.properties['osc:status'] }}
            </v-chip>
          </span>
        </v-row>
        <v-row>
          <v-col>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <v-chip
                v-for="theme in project.properties['osc:themes']"
                :key="theme"
                class="mx-1"
                color="rgb(124, 69, 86)"
                dark
                label
              >
                {{ theme }}
              </v-chip>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <v-col>
                <v-icon>
                  mdi-calendar-today
                </v-icon>
                Start date - {{ project.properties.start_datetime }}
              </v-col>
              <v-col>
                <v-icon>
                  mdi-calendar
                </v-icon>
                Estimated end date - {{ project.properties.end_datetime }}
              </v-col>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4 text-h6">
              <v-icon>
                mdi-account-multiple
              </v-icon>
              Consortium
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <span v-for="consort in project.properties['osc:consortium']" :key="consort">
                {{ consort }}
              </span>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <a
                v-for="link in project.links.filter(el => el.rel === 'via')"
                :key="link.href"
                :href="link.href"
                target="_blank"
                class="mx-1 projectLink"
              >
                <v-icon>
                  mdi-link
                </v-icon>
                <span>
                  {{ link.href.includes('eo4society.esa.int') ? 'EO4SOCIETY LINK' : 'WEBSITE' }}
                </span>
              </a>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="ml-2 text-h6">
              <v-icon>
                mdi-file-document
              </v-icon>
              Description
            </v-row>
            <v-row class="ml-2">
              {{ project.properties.description }}
            </v-row>
          </v-col>
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
import BreadCrumbNav from '@/components/BreadCrumbNav.vue'

export default {
  name: 'ProjectSingle',
  components: {
    BreadCrumbNav
  },
  data () {
    return {
      project: null,
      recordsSearch: '',
      recordsFilterSortBy: 'Name',
      recordsFilterOrder: 'Ascending',
      recordsFilterMission: 'CryoSat2'
    }
  },
  head () {
    return {
      title: this.$route.params.project.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  async created () {
    // todo handle variable names divided by '_'
    await this.$axios.$get(`projects/${this.$route.params.project}`).then((res) => {
      this.project = res
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
.projectLink {
  text-decoration: none;
}
</style>
