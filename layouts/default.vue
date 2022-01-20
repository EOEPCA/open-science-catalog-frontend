<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      color="background"
      dark
      fixed
      app
    >
      <v-list
        class="pt-0"
      >
        <div
          class="d-flex align-center"
          style="height: 64px"
          @click.stop="drawer = !drawer"
        >
          <v-spacer />
          <v-btn
            icon
            large
            class="ma-1"
          >
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </div>
        <v-divider />
        <v-list-item
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          prepend-icon="mdi-plus-circle-outline"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>
                Contribute
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            to="/new-record"
            router
            exact
            class="pl-10 primary"
          >
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              New record
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/new-project"
            router
            exact
            class="pl-10 primary"
          >
            <v-list-item-icon>
              <v-icon>mdi-wallet</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              New project
            </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item
          to="/metrics"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-poll</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Metrics
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          to="/search"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Search
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://opensciencedata.esa.int/api/docs/"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              API Documentation
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="primary"
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-text-field
        v-model="search"
        class="mr-4"
        hide-details
        solo
        single-line
        background-color="secondary"
        style="width: 250px !important; flex-grow: 0"
        label="Search..."
        prepend-inner-icon="mdi-magnify"
      />
      <img :src="withBase('/img/ESA_Logo.svg')">
    </v-app-bar>
    <v-main class="grey lighten-3">
      <Nuxt />
    </v-main>
    <v-footer
      color="primary"
      dark
      fixed
      app
    >
      <small class="justify-right">
        <span>&copy; {{ new Date().getFullYear() }} by </span>
        <a href="https://www.esa.int/" target="_blank" class="white--text">ESA</a>
      </small>
      <v-spacer />
      <small class="justify-right">
        <a href="https://github.com/EOEPCA/open-science-catalog-frontend" target="_blank" class="white--text">open-science-catalog</a>
        <span> v{{ `${$store.getters.appVersion
          .split('.')[0]}.${$store.getters.appVersion
          .split('.')[1]}` }} by</span>
        <a href="https://eox.at" target="_blank" class="white--text mx-1">
          <img :src="withBase('/img/EOX_Logo_weiss.svg')" height="11px" class="my-0">
        </a>
      </small>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      search: '',
      title: 'Open science catalog'
    }
  },
  computed: {
    ...mapGetters([
      'appVersion'
    ])
  }
}
</script>

<style>
.v-list-item--active {
  color: white !important;
}
</style>
