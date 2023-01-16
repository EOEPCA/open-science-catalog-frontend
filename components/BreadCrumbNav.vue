<template>
  <v-breadcrumbs class="navigationBreadcrumb" :items="navigationBreadcrumb">
    <template #item="{ item }">
      <v-breadcrumbs-item :to="item.href" nuxt :disabled="item.disabled">
        <v-chip
          v-if="item === navigationBreadcrumb[navigationBreadcrumb.length - 1]"
          :color="$typeColor(item.type)"
          dark
          small
          label
          class="mr-2 text-uppercase"
        >
          {{ item.type }}
        </v-chip>
        <span>{{ item.text }}</span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: null,
    },
    variable: {
      type: String,
      default: null,
    },
    project: {
      type: Object,
      default: () => null,
    },
    product: {
      type: String,
      default: null,
    },
  },
  computed: {
    navigationBreadcrumb() {
      return [
        {
          text: "Catalog",
          href: "/",
        },
        ...(this.theme
          ? [
              {
                text: this.theme,
                href: `/themes/${this.slugify(this.theme)}`,
                type: "theme",
              },
            ]
          : []),
        ...(this.project
          ? [
              {
                text: this.project.name,
                href: `/projects/${this.project.url}`,
                type: "project",
              },
            ]
          : []),
        ...(this.variable
          ? [
              {
                text: this.variable,
                href: `/variables/${this.slugify(this.variable)}`,
                type: "variable",
              },
            ]
          : []),
        ...(this.product
          ? [
              {
                text: this.product,
                href: `/products/${this.slugify(this.product)}`,
                type: "product",
              },
            ]
          : []),
      ];
    },
  },
};
</script>

<style scoped>
.navigationBreadcrumb {
  background: rgba(255, 255, 255, 0.667);
  padding: 10px;
}

.navigationBreadcrumb li {
  font-size: 17px !important;
}

::v-deep .v-breadcrumbs__item {
  display: inline;
}
</style>
