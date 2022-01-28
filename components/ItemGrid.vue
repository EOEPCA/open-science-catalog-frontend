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
      <v-card>
        <v-card-title>
          <v-chip
            small
            label
            color="primary"
            class="text-uppercase"
          >
            Record
          </v-chip>
        </v-card-title>
        <v-card-title class="text-subtitle-2 text-uppercase">
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          {{ item.recordsNumber }} Records
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
    }
  }
}
</script>
