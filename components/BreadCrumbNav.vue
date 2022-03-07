<template>
  <v-breadcrumbs
    class="navigationBreadcrumb"
    :items="navigationBreadcrumb"
  >
    <template #item="{ item }">
      <v-breadcrumbs-item
        :to="item.href"
        nuxt
        :disabled="item.disabled"
      >
        <v-chip
          v-if="item === navigationBreadcrumb[navigationBreadcrumb.length - 1]"
          :color="getColor(item.type)"
          dark
          small
          label
          class="mr-2 text-uppercase"
        >
          {{ item.type }}
        </v-chip>
        <span class="text-capitalize">{{ item.text }}</span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: null
    },
    variable: {
      type: String,
      default: null
    },
    project: {
      type: String,
      default: null
    },
    record: {
      type: String,
      default: null
    }
  },
  computed: {
    navigationBreadcrumb () {
      return [
        {
          text: 'ESA EO Catalogue',
          href: '/'
        },
        ...(this.theme
          ? [
              {
                text: this.theme,
                href: `/themes/${this.slugify(this.theme)}`,
                type: 'theme'
              }
            ]
          : []),
        ...(this.project
          ? [
              {
                text: this.project,
                href: `/projects/${this.slugify(this.project)}`,
                type: 'project'
              }
            ]
          : []),
        ...(this.variable
          ? [
              {
                text: this.variable,
                href: `/variables/${this.slugify(this.variable)}`,
                type: 'variable'
              }
            ]
          : []),
        ...(this.record
          ? [
              {
                text: this.record,
                href: `/records/${this.slugify(this.record)}`,
                type: 'record'
              }
            ]
          : [])
      ]
    }
  },
  methods: {
    getColor (type) {
      switch (type) {
        case 'theme': {
          return 'grey'
        }
        case 'project': {
          return 'primary'
        }
        case 'variable': {
          return 'green'
        }
      }
    }
  }
}
</script>

<style scoped>
.navigationBreadcrumb {
  background: rgba(255, 255, 255, 0.667);
  padding: 10px;
}

.navigationBreadcrumb li {
  font-size: 17px !important;
}
</style>
