<template>
  <v-row>
    <v-col
      v-for="item in nonEmptyItems"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <!-- <v-card
        :to="`/${getType(item)}s/${
          getType(item) === 'variable' ? slugify(item.name) : $extractSlug(item)
        }`"
        outlined
      > -->
      <v-card :to="`/${getType(item)}s/${item.id}/collection`" outlined>
        <v-card-title>
          <v-chip
            small
            label
            :color="$typeColor(getType(item))"
            dark
            class="text-uppercase"
          >
            {{ getType(item) }}
          </v-chip>
          <v-spacer />
          <template v-if="getType(item) === 'project'">
            <div class="projectDate">
              <v-icon small> mdi-calendar-today </v-icon>
              <small>{{ item.start_datetime.split(" ")[0] }}</small>
              -
            </div>
            <div class="projectDate">
              <v-icon small> mdi-calendar </v-icon>
              <small>{{ item.end_datetime.split(" ")[0] }}</small>
            </div>
          </template>
        </v-card-title>
        <v-card-title class="text-subtitle-2 text-uppercase">
          {{ getType(item) === "variable" ? item.name : item.title }}
        </v-card-title>
        <v-card-subtitle v-if="getType(item) === 'project'">
          <span v-for="consort in item['osc:consortium']" :key="consort">
            {{ consort }}
          </span>
        </v-card-subtitle>
        <v-card-text>
          <p v-if="getType(item) === 'project' || getType(item) === 'product'">
            {{
              item.description
                ? `${item.description.substring(0, 100)}...`
                : "No description"
            }}
          </p>
          <p v-if="getType(item) === 'variable' || getType(item) === 'project'">
            <template v-if="getType(item) === 'variable'">
              {{ item.summary.numberOfProducts }} Product{{
                item.summary.numberOfProducts === 1 ? "" : "s"
              }}
            </template>
            <template v-else>
              {{ item.links.filter((link) => link.rel === "item").length }}
              Product{{
                item.links.filter((link) => link.rel === "item").length === 1
                  ? ""
                  : "s"
              }}
            </template>
            {{ $route.params.theme ? "(in current theme)" : "" }}
          </p>
          <div
            v-if="
              getType(item) === 'product' &&
              item.keywords.find((el) => el.includes('theme:'))
            "
            class="mt-2"
          >
            <v-chip
              v-for="theme in item.keywords.filter((el) =>
                el.includes('theme:')
              )"
              :key="theme"
              x-small
              color="grey"
              dark
              label
              :to="`/themes/${slugify(theme.replace('theme:', ''))}`"
              class="mr-2 mb-2 text-uppercase"
            >
              {{ theme.replace("theme:", "") }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    showEmptyItems: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    nonEmptyItems() {
      return this.items.filter((item) => {
        if (!this.showEmptyItems) {
          if (this.getType(item) === "variable") {
            return item.summary.numberOfProducts > 0;
          }
          if (this.getType(item) === "project") {
            return item.links.filter((link) => link.rel === "item").length > 0;
          }
        }
        return item;
      });
    },
  },
  methods: {
    getType(item) {
      // let type;
      // if (item.properties?.["osc:type"]) {
      //   type = item.properties["osc:type"].toLowerCase();
      // } else if (item.properties?.type) {
      //   type = item.properties.type === "dataset" ? "product" : "project";
      // } else {
      //   type = "variable";
      // }
      // return type;
      return item["osc:type"].toLowerCase();
    },
  },
};
</script>

<style>
.projectDate {
  white-space: nowrap;
}
</style>
