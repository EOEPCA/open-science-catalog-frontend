<template>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card
        :to="`/${type}/${item.name.toLowerCase()}`"
        outlined
      >
        <v-card-title>
          <v-chip
            small
            label
            :color="type === 'variables' ? 'green' : 'primary'"
            :dark="type === 'variables' ? true : false"
            class="text-uppercase"
          >
            {{ type.toUpperCase() }}
          </v-chip>
        </v-card-title>
        <v-card-title class="text-subtitle-2 text-uppercase">
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          <span v-if="type === 'variables'">
            {{ item.recordsNumber }} Records
          </span>
          <span v-else>
            {{ item.description }}
          </span>
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
    type: {
      type: String,
      default: () => ''
    }
  }
}
</script>
