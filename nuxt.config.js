const webpack = require('webpack') // eslint-disable-line
const fs = require('fs') // eslint-disable-line

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
const routerBase = process.env.ROUTER_BASE || '/'

export default {
  publicRuntimeConfig: {
    staticEndpoint: process.env.STATIC_ENDPOINT,
    dynamicEndpoint: process.env.DYNAMIC_ENDPOINT,
    backendEndpoint: process.env.BACKEND_ENDPOINT,
    authEnabled: process.env.ENABLE_AUTH
  },

  router: {
    base: routerBase
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ESA Open Science Catalog',
    title: 'ESA Open Science Catalog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'ESA Open Science Catalog' },
      { hid: 'description', name: 'description', content: 'The European Space Agency portal features the latest news in space exploration, human spaceflight, launchers, telecommunications, navigation, monitoring and space science. ' },
      { property: 'og:description', content: 'The European Space Agency portal features the latest news in space exploration, human spaceflight, launchers, telecommunications, navigation, monitoring and space science.' },
      { name: 'keywords', content: 'European Space Agency, Moon, Mars, sun, space exploration, probes, missions, satellites, launchers, international space station, ISS, telecommunications, earth observation, navigation, astronauts, solar system, universe, remote sensing, space news, ESA, environment, monitoring, astronomy, Ariane, rocket, Galileo, comet, education, Venus ' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${routerBase}favicon.ico` }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.scss',
    './static/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/with-base',
    '~/plugins/slugify',
    '~/plugins/text-to-hex',
    '~/plugins/type-color',
    '~/plugins/axios',
    '~/plugins/markdown',
    '~/plugins/auth-temp', // TEMP while auth is disabled
    '~/plugins/staticCatalogHelpers',
    { src: '~plugins/ol', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    // '@nuxtjs/auth-next'
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false
    },
    options: {
      customProperties: true
    },
    theme: {
      themes: {
        light: {
          primary: '#003247',
          secondary: '#335E6F',
          background: '#0F2733',
          applications: '#00B19D'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          ROUTER_BASE: `"${routerBase}"`,
          PACKAGE_VERSION: `"${version}"`
        }
      })
    ]
  }

  // auth: {
  //   strategies: {
  //     oidc: {
  //       scheme: 'openIDConnect',
  //       clientId: process.env.OAUTH_CLIENTID,
  //       endpoints: {
  //         configuration: process.env.OPENID_CONFIGURATION
  //       },
  //       responseType: 'token id_token',
  //       idToken: {
  //         property: 'id_token',
  //         maxAge: 1800
  //       },
  //       scope: process.env.OAUTH_SCOPE,
  //       acrValues: ['passport_social']
  //     }
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: process.env.OAUTH_REDIRECT_LOGOUT,
  //     callback: process.env.OAUTH_REDIRECT_CALLBACK,
  //     home: '/'
  //   },
  //   fullPathRedirect: true
  // }
}
