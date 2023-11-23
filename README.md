# open-science-catalog-frontend

## The Open Science Catalog ([opensciencedata.esa.int](https://opensciencedata.esa.int/))

The Open Science Catalog is one of the elements contributing to an Open Science framework and infrastructure, with the scope to enhance the discoverability and use of products, data and knowledge resulting from Scientific Earth Observation exploitation studies.

Adhering by design to the “FAIR” (findable, accessible, interoperable, reproducible/reusable) principles, the Open Science Catalogue aims to support better knowledge discovery and innovation, and facilitate data and knowledge integration and reuse by the scientific community.

## This repository

This repository holds the static frontend app powered by [Nuxt](https://nuxtjs.org/). On every push to the `dev` branch, a GitHub Action triggers a pre-rendering of the application and publishes it in the `gh-pages` branch, thus deploying a development version on the domain [eoepca.github.io/open-science-catalog-frontend](https://eoepca.github.io/open-science-catalog-frontend/). The production version is built on each push to the `main` branch as a docker image and is available at [opensciencedata.esa.int](https://opensciencedata.esa.int/).

Every PR triggers GitHub Actions for linting and testing, and additionally checks for conventional style commits.

## Used EOEPCA endpoints

This static frontend access two endpoints provided by [EOEPCA](https://eoepca.org/):

- [OSC Metadata ("static catalog")](https://eoepca.github.io/open-science-catalog-metadata/) - see [open-science-catalog-metadata repository](https://github.com/EOEPCA/open-science-catalog-metadata)
- [OSC pycsw access ("dynamic catalog")](https://resource-catalogue.osc.develop.eoepca.org/)

These endpoints are configured in the [axios plugin file](./plugins/axios.js) (using [nuxt/axios](https://axios.nuxtjs.org/)) and then injected into the app, so they can be used like so:

```js
this.$staticCatalog.$get("/metrics");
this.$dynamicCatalog.$get("/collections");
```

Note that by default, all calls to the static endpoint add the `.json` file ending and all calls to the dynamic endpoint add the `f=json` query parameter to the request url for convenience.

These endpoints are primarily used within the application [central store](./store/): [staticCatalog.js](./store/staticCatalog.js) and [dynamicCatalog.js](./store/dynamicCatalog.js).

## Development Setup

### Install dependencies
```bash
$ npm install
```
### Build and configure [Open Science Catalog STAC-Browser](https://github.com/EOEPCA/open-science-catalog-stac-browser) locally
find STAC-Browser [runtime configuration](https://github.com/radiantearth/stac-browser/blob/v3.1.0-rc.1/docs/options.md) in
`static/stac-browser/config.js` 
```bash
$ npm run build:browser
```
### Serve with hot reload at localhost:3000
```bash
$ npm run dev
```

### Build for production and launch server
```bash
$ npm run build
$ npm run start
```

### Generate static project
```bash
$ npm run generate
```

### Lint
```bash
$ npm run lint #linting only
$ npm run lint:fix #lint and fix
```
### Test
```bash
$ npm run test
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
