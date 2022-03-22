<template>
  <v-row class="pa-8">
    <v-col
      v-for="item in items"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card
        :to="`/${getType(item)}s/${getType(item) === 'variable'
          ? slugify(item.name)
          : item.id}`"
        outlined
      >
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
          <div v-if="getType(item) === 'project'">
            <v-icon small>
              mdi-calendar-today
            </v-icon>
            <small>{{ item.properties.start_datetime }}</small>
            -
            <v-icon small>
              mdi-calendar
            </v-icon>
            <small>{{ item.properties.end_datetime }}</small>
          </div>
        </v-card-title>
        <v-card-title class="text-subtitle-2 text-uppercase">
          {{ getType(item) === 'variable' ? item.name : item.properties.title }}
        </v-card-title>
        <v-card-subtitle v-if="getType(item) === 'project'">
          <span v-for="consort in item.properties['osc:consortium']" :key="consort">
            {{ consort }}
          </span>
        </v-card-subtitle>
        <v-card-text>
          <span v-if="getType(item) === 'variable'">
            {{ item.productsNumber }} Products
          </span>
          <span v-else>
            {{ `${item.properties.description.substring(0, 100)}...` }}
          </span>
          <div v-if="getType(item) === 'product' && 'osc:themes' in item.properties" class="mt-2">
            - {{ item.properties['osc:themes'].join(', ') }}
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
      default: () => []
    },
  },
  methods: {
    getType(item) {
      let type
      if (item.properties?.['osc:type']) {
        type = item.properties['osc:type'].toLowerCase()
      } else if (item.properties?.type) {
        type = item.properties.type === 'dataset'
          ? 'product'
          : 'project'
      } else {
        type = 'variable'
      }
      return type
    }
  }
}
</script>
