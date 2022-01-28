<template>
  <v-container>
    <h1>Metrics page</h1>
    <MetricsTable
      :headers="metrics.years"
      :items="metrics.variables"
    />
  </v-container>
</template>

<script>
export default {
  name: 'Metrics',
  async asyncData ({ $axios }) {
    const metrics = await $axios.$get('/metrics')
    return {
      metrics
    }
  },
  head: {
    title: 'Metrics'
  }
}
</script>
