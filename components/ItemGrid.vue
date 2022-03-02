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
        :to="`/${type}/${type === 'variables' ? slugify(item.name) : item.id}`"
        outlined
      >
        <v-card-title>
          <v-chip
            small
            label
            :color="type === 'variables' ? 'green' : 'primary'"
            dark
            class="text-uppercase"
          >
            {{ type.toUpperCase() }}
          </v-chip>
          <v-spacer />
          <div v-if="type === 'projects'" class="projectDates">
            <v-icon small>
              mdi-calendar-today
            </v-icon>
            {{ item.properties.start_datetime.slice(0, -9) }}
            -
            <v-icon small>
              mdi-calendar
            </v-icon>
            {{ item.properties.end_datetime.slice(0, -9) }}
          </div>
        </v-card-title>
        <v-card-title class="text-subtitle-2 text-uppercase">
          {{ type === 'variables' ? item.name : item.properties.title }}
        </v-card-title>
        <v-card-subtitle v-if="type === 'projects'">
          {{ item.properties['osc:consortium'] }}
        </v-card-subtitle>
        <v-card-text>
          <span v-if="type === 'variables'">
            {{ item.recordsNumber }} Records
          </span>
          <span v-else>
            {{ `${item.properties.description.substring(0, 100)}...` }}
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

<style>
.projectDates {
  font-size: 15px;
}
</style>
