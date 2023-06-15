<template>
  <div style="overflow-y: auto; max-height: 100%">
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-0' : 'pa-2'">
      <v-row class="pt-5 pb-0">
        <v-col>
          <h1
            class="primary--text"
            :class="
              $vuetify.breakpoint.mdAndUp ? 'text-h2 mt-5' : 'text-h4 mt-5'
            "
          >
            Welcome to the Open Science Catalog
          </h1>
        </v-col>
      </v-row>
      <v-row class="pb-5 pt-0">
        <v-col>
          <p>
            A catalog of publicly available geoscience products, datasets and
            resources developed in the frame of scientific research Projects
            funded by ESA EO (Earth Observation). Products vary in geographical
            and temporal extent, production methodology, validation and quality.
            Please refer to the documentation of each product for details.
          </p>
          <p>
            <strong>What products can I find here?</strong>
          </p>
          <p>
            The majority of pages on opensciencedata.esa.int only hold metadata
            for each product and project. The actual data and its documentation
            are maintained and accessible at the data providers, outside of
            esa.int, for the majority of cases. This catalog provides the
            metadata and links to the data as it exists in those many other
            locations.
          </p>
          <p>
            Explore the catalog, consisting of
            <v-chip
              dark
              small
              label
              :color="$typeColor('theme')"
              class="mb-2 mb-sm-0 text-uppercase"
              to="/themes/catalog"
            >
              Themes </v-chip
            >,
            <v-chip
              dark
              small
              label
              :color="$typeColor('project')"
              class="mb-2 mb-sm-0 text-uppercase"
              to="/projects/catalog"
            >
              Projects </v-chip
            >,
            <v-chip
              dark
              small
              label
              :color="$typeColor('variable')"
              class="mb-2 mb-sm-0 text-uppercase"
              to="/variables/catalog"
            >
              Variables
            </v-chip>
            and
            <v-chip
              dark
              small
              label
              :color="$typeColor('product')"
              class="mb-2 mb-sm-0 text-uppercase"
              to="/products/catalog"
            >
              Products </v-chip
            >.
          </p>
          <p>
            Choose a theme below to explore available products/projects or
            programmatically access the catalog via the
            <a :href="$dynamicCatalog.defaults.baseURL" target="_blank"
              >API Documentation</a
            >!
          </p>
          <p>
            To suggest changes and/or contribute to continuously growing number
            of available products, you can
            <router-link to="/login">register here</router-link>, and make your
            contribution to the catalog!
          </p>
          <p>
            If you have any questions or feedback regarding Open Science
            Catalog, please contact us at
            <a href="mailto:opensciencedata@esa.int">opensciencedata@esa.int</a
            >.
          </p>
          <p>
            <v-btn dark small color="primary" to="/metrics">
              <v-icon left> mdi-poll </v-icon>
              Metrics
            </v-btn>
            <v-btn dark small color="primary" to="/search">
              <v-icon left> mdi-magnify </v-icon>
              Search
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-0' : 'pa-2'">
      <v-row justify="center" align="center" no-gutters>
        <v-col
          v-for="theme in themes"
          :key="theme.title"
          cols="12"
          md="4"
          class="pa-1"
        >
          <nuxt-link
            :to="`/themes/${theme.href
              .substring(theme.href.indexOf('/theme/'))
              .replace('.json', '')}`"
          >
            <div
              class="d-flex align-center elevation-2 rounded"
              style="
                position: relative;
                height: 300px;
                overflow: hidden;
                border-bottom: 0.25em solid rgb(51, 94, 111);
              "
            >
              <v-img :src="theme.image" width="100%" height="100%">
                <span class="h1 imageLabel elevation-2">
                  {{ theme.title.replace("_", " ") }}
                </span>
              </v-img>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    themes: [],
  }),
  head: {
    titleTemplate: "ESA Open Science Catalog",
  },
  async mounted() {
    const themes = await this.$staticCatalog.$get("/themes/catalog");
    const themesLinks = themes.links.filter((l) => l.rel === "child");
    for (let t of themesLinks) {
      const i = await this.$axios.$get(
        t.href.includes("./")
          ? `${this.$staticCatalog.defaults.baseURL}/themes${t.href.replace(
              "./",
              "/"
            )}`
          : t.href
      );
      t.image = i.links.find((l) => l.rel === "preview").href;
      if (t.image.includes("./")) {
        t.image = t.image.replace(
          "./",
          `${this.$staticCatalog.defaults.baseURL}/themes${t.href
            .replace("./", "/")
            .replace("/catalog.json", "/")}`
        );
      }
    }
    this.themes = themesLinks;
  },
};
</script>

<style>
.imageLabel {
  background: #003247;
  color: white;
  position: absolute;
  text-transform: uppercase;
  padding: 1px 10px;
  top: 37%;
  left: 15%;
  font-size: 21px;
  font-weight: bold;
}
</style>
