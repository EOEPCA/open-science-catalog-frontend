const webpack = require("webpack"); // eslint-disable-line
const fs = require("fs"); // eslint-disable-line

const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;
const routerBase = process.env.ROUTER_BASE || "/";

export default {
  publicRuntimeConfig: {
    devMode: process.env.NODE_ENV !== "production",
    staticEndpoint:
      process.env.STATIC_ENDPOINT ||
      "https://metadata.staging.opensciencedata.esa.int/open-science-catalog-metadata-testing",
    staticBaseToReplace:
      process.env.STATIC_BASE_TO_REPLACE ||
      "https://eoepca.github.io/open-science-catalog-metadata-testing",
    githubDataRoot:
      process.env.GITHUB_DATA_ROOT ||
      "https://github.com/EOEPCA/open-science-catalog-metadata-testing/blob/main",
    dynamicEndpoint:
      process.env.DYNAMIC_ENDPOINT ||
      "https://resource-catalogue.testing.opensciencedata.esa.int",
    backendEndpoint:
      process.env.BACKEND_ENDPOINT ||
      "https://backend-api.testing.opensciencedata.esa.int",
    authEnabled: process.env.ENABLE_AUTH || true,
    auth: {
      strategies: {
        oidc: {
          clientId:
            process.env.OAUTH_CLIENTID ||
            "8c9fe79e-e0d7-45c9-8b0a-34c25058f8c1",
          endpoints: {
            configuration:
              process.env.OPENID_CONFIGURATION ||
              "https://auth.staging.opensciencedata.esa.int/.well-known/openid-configuration",
          },
          responseType: "token id_token",
          // Not setting id token as it does not seem to be required for gluu
          // idToken: {
          //   property: 'id_token',
          //   maxAge: 1800
          // },
          scope: process.env.OAUTH_SCOPE || "profile",
          acrValues: ["passport_social"],
        },
      },
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: process.env.BUILD_MODE === "STATIC" ? "static" : "server",

  // only for static mode
  generate: {
    fallback: true,
  },

  router: {
    base: routerBase,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s | ESA Open Science Catalog",
    title: "ESA Open Science Catalog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "ESA Open Science Catalog" },
      {
        hid: "description",
        name: "description",
        content:
          "The Open Science Data Catalog features open access geoscience products, datasets and other resources produced by scientific research projects funded by ESA EO (Earth Observation).",
      },
      {
        property: "og:description",
        content:
          "The Open Science Data Catalog features open access geoscience products, datasets and other resources produced by scientific research projects funded by ESA EO (Earth Observation).",
      },
      {
        name: "keywords",
        content:
          "European Space Agency, Moon, Mars, sun, space exploration, probes, missions, satellites, launchers, international space station, ISS, telecommunications, earth observation, navigation, astronauts, solar system, universe, remote sensing, space news, ESA, environment, monitoring, astronomy, Ariane, rocket, Galileo, comet, education, Venus ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${routerBase}favicon.ico` },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/global.scss", "./static/css/materialdesignicons.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/with-base",
    "~/plugins/slugify",
    "~/plugins/text-to-hex",
    "~/plugins/type-color",
    "~/plugins/axios",
    "~/plugins/markdown",
    "~/plugins/staticCatalogHelpers",
    "~/plugins/item",
    { src: "~plugins/ol", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxt/content",
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    options: {
      customProperties: true,
    },
    theme: {
      themes: {
        light: {
          primary: "#003247",
          secondary: "#335E6F",
          background: "#0F2733",
          applications: "#00B19D",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          ROUTER_BASE: `"${routerBase}"`,
          PACKAGE_VERSION: `"${version}"`,
        },
      }),
    ],
  },

  auth: {
    strategies: {
      oidc: {
        scheme: "~/auth/runtimeConfigurableScheme.js",
      },
    },
    redirect: {
      login: "/login",
      logout: process.env.OAUTH_REDIRECT_LOGOUT || "/",
      callback: process.env.OAUTH_REDIRECT_CALLBACK || "/oauth-callback",
      home: "/",
    },
    fullPathRedirect: true,
  },
};
