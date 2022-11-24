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

        <client-only>
          <v-list-group
            v-if="$auth.loggedIn"
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
              to="/add-item"
              router
              exact
              class="pl-10 primary"
            >
              <v-list-item-icon>
                <v-icon>mdi-file-plus-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Add item
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/edit-item"
              router
              exact
              class="pl-10 primary"
            >
              <v-list-item-icon>
                <v-icon>mdi-file-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Edit item
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/contribution-status"
              router
              exact
              class="pl-10 primary"
            >
              <v-list-item-icon>
                <v-icon>mdi-file-clock-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Status
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </client-only>

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
          :href="$dynamicCatalog.defaults.baseURL"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon>mdi-xml</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              API Access
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <template #append>
        <client-only>
          <div class="pa-2">
            <template
              v-if="$auth.loggedIn"
            >
              <p class="white--text text-center mb-0">
                <span v-if="$auth.user.given_name">
                  Hello, {{ $auth.user.given_name }} {{ $auth.user.family_name }}
                </span>
                <span v-else>
                  Hello, {{ $auth.user.name || 'unknown user' }}
                </span>
              </p>
              <p v-if="$auth.user.OSCDataOwner" class="white--text text-center">
                <small>OSC Data Owner</small>
                <v-icon
                  small
                  color="success"
                >
                  mdi-check-decagram
                </v-icon>
              </p>
            </template>
            <v-btn
              color="secondary"
              block
              :to="$auth.loggedIn ? '/logout' : '/login'"
            >
              <v-icon left>
                mdi-account-outline
              </v-icon>
              {{ $auth.loggedIn ? 'Log out' : 'Log in' }}
            </v-btn>
          </div>
        </client-only>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      color="primary"
      dark
      fixed
      app
      style="border-bottom: 4px solid #335E6F !important;
      box-shadow: none !important;"
    >
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title class="pl-0 pl-sm-5">
        <nuxt-link
          to="/"
          class="white--text text-decoration-none text-uppercase"
          title
        >
          {{ title }}
        </nuxt-link>
        <span v-if="$config.devMode">[DEVELOPMENT VERSION]</span>
      </v-toolbar-title>
      <v-spacer />
      <a href="https://www.esa.int/" target="_blank" class="d-flex align-center">
        <img :src="withBase('/img/ESA_Logo.svg')">
      </a>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      color="primary"
      dark
      fixed
      app
      class="justify-center"
    >
      <small class="justify-right">
        <span>&copy; {{ new Date().getFullYear() }} by </span>
        <a href="https://www.esa.int/" target="_blank" class="white--text">ESA</a>
      </small>
      <v-spacer />
      <small class="justify-right">
        <a href="/terms" target="_blank" class="white--text">Terms and Conditions</a>
        <span> | </span>
        <a href="/privacy-notice" target="_blank" class="white--text">Privacy Notice</a>
      </small>
      <v-spacer />
      <small class="justify-right">
        <a href="https://github.com/EOEPCA/open-science-catalog-frontend" target="_blank" class="white--text">open-science-catalog</a>
        <span> v{{ $store.getters.appVersion }} by</span>
        <a href="https://eox.at" target="_blank" class="white--text mx-1">
          <img :src="withBase('/img/EOX_Logo_weiss.svg')" height="11px" class="my-0">
        </a>
      </small>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      search: '',
      title: 'Open Science Catalog'
    }
  },
  computed: {
    ...mapState([
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
