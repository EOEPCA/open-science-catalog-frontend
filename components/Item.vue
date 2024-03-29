<template>
  <div>
    <client-only>
      <bread-crumb-nav
        v-if="nav"
        :theme="nav.theme"
        :project="nav.project"
        :variable="nav.variable"
        :product="nav.product"
      />
    </client-only>
    <div class="itemHeaderContainer">
      <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
        <v-row>
          <v-col>
            <h1
              class="primary--text"
              :class="
                $vuetify.breakpoint.smAndDown &&
                $vuetify.breakpoint.width > $vuetify.breakpoint.height
                  ? 'mt-0'
                  : 'mt-5'
              "
              :style="`font-size: ${
                $vuetify.breakpoint.mdAndUp ? 3 : 2.3
              }em; word-break: break-word; line-height: normal`"
            >
              {{ title }}
            </h1>
            <h4 v-if="subtitle" class="mt-2">
              {{ subtitle }}
            </h4>
          </v-col>
        </v-row>
        <v-row v-if="chips.themes">
          <v-col>
            <v-chip
              v-for="theme in chips.themes"
              :key="theme"
              color="grey"
              dark
              label
              :to="`/themes/${slugify(theme)}`"
              class="mr-2 mb-2 text-uppercase"
            >
              {{ theme }}
            </v-chip>
            <v-chip
              v-if="chips.variable"
              color="green"
              dark
              label
              :to="`/variables/${slugify(chips.variable)}`"
              class="mr-2 mb-2 text-uppercase"
            >
              {{ chips.variable }}
            </v-chip>
            <v-chip
              v-if="chips.project && chips.project.url !== null"
              color="primary"
              dark
              label
              :to="`/projects/${chips.project.url}`"
              class="mr-2 mb-2 text-uppercase"
            >
              {{ chips.project.name }}
            </v-chip>
            <v-chip
              v-if="chips.status"
              :color="chips.status === 'ONGOING' ? 'green' : 'primary'"
              outlined
              dark
              label
              class="mr-2 mb-2 text-uppercase"
            >
              {{ chips.status }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <template v-if="$vuetify.breakpoint.smAndDown">
              <v-scale-transition>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <small v-show="showDescription" v-html="description" />
              </v-scale-transition>
              <v-btn
                text
                x-small
                block
                @click="showDescription = !showDescription"
              >
                <v-icon left>
                  {{
                    showDescription
                      ? "mdi-arrow-collapse-vertical"
                      : "mdi-arrow-expand-vertical"
                  }}
                </v-icon>
                Description
              </v-btn>
            </template>
            <template v-else>
              <h6 class="text-h6 mb-2 d-flex align-center">
                <v-icon left> mdi-text-long </v-icon>
                Description
              </h6>
              <p>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <small v-html="description" />
              </p>
            </template>
          </v-col>
          <v-col cols="12" md="4">
            <h6 class="text-h6 mb-2 d-flex align-center">
              <v-icon left> mdi-information-outline </v-icon>
              Details
            </h6>
            <div v-if="details.start_datetime" class="mb-2">
              <v-icon left> mdi-calendar-today </v-icon>
              <strong class="text-uppercase mr-2">Start Date</strong>
              {{ details.start_datetime.split("T")[0] }}
            </div>
            <div v-if="details.end_datetime" class="mb-2">
              <v-icon left> mdi-calendar </v-icon>
              <strong class="text-uppercase mr-2">End Date</strong>
              {{ details.end_datetime.split("T")[0] }}
            </div>
            <div v-if="details.datetime" class="mb-2">
              <v-icon left> mdi-calendar-check </v-icon>
              <strong class="text-uppercase mr-2">Release Date</strong>
              {{ details.datetime && details.datetime.slice(0, -10) }}
            </div>
            <div v-if="details.consortium" class="mb-2">
              <v-icon left> mdi-account-multiple </v-icon>
              <strong class="text-uppercase mr-2">Consortium</strong>
              {{ details.consortium.join(", ") }}
            </div>
            <div v-if="details && details['osc:project']" class="mb-2">
              <v-icon left> mdi-calendar-text </v-icon>
              <strong class="text-uppercase mr-2">Project</strong>
              <a v-if="chips.project" :href="`/projects/${chips.project.url}`">
                {{ details["osc:project"] }}
              </a>
              <span v-else>
                {{ details["osc:project"] }}
              </span>
            </div>
            <div v-if="details['osc:missions']" class="mb-2">
              <v-icon left> mdi-satellite </v-icon>
              <strong class="text-uppercase mr-2">Satellite missions</strong>
              {{ details["osc:missions"].join(", ") }}
            </div>
            <v-btn
              v-for="(link, key) in details.links
                .filter((el) => el.rel === 'via' && el.href)
                .sort((a, b) => (a.title < b.title || !b.title ? -1 : 1))"
              :key="key"
              color="primary"
              :outlined="link.title !== 'Access'"
              :block="$vuetify.breakpoint.xsOnly"
              class="mb-2 mr-3"
              :href="link.href"
              target="_blank"
            >
              <v-icon v-if="link.title === 'Access'" left>
                mdi-location-enter
              </v-icon>
              <v-icon v-else-if="link.title === 'Documentation'" left>
                mdi-file-document-outline
              </v-icon>
              <v-icon v-else left> mdi-web </v-icon>
              {{ link.title || "Website" }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <slot />
    <edit-button :item-id="id" />
  </div>
</template>

<script>
export default {
  name: "ItemComponent",
  props: {
    id: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    chips: {
      type: Object,
      default: () => ({}),
    },
    description: {
      type: String,
      default: "",
    },
    details: {
      type: Object,
      default: () => ({}),
    },
    nav: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
};
</script>

<style>
.itemHeaderContainer {
  border-bottom: 0.25em solid #335e6f;
  padding-bottom: 40px;
}
</style>
