<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <v-row>
      <v-col cols="12">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="parsedTerms" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    parsedTerms: null
  }),
  async created () {
    const terms = await this.$axios.$get(this.withBase('/terms.md'))
    this.parsedTerms = this.$markdown(terms)
  }
}
</script>
