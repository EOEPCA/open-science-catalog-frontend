<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <v-row>
      <v-col cols="12">
        <nuxt-content :document="parsedContent" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TermsPage",
  data: () => ({
    parsedContent: null,
  }),
  async created() {
    this.parsedContent = await this.$content("terms").fetch();
  },
};
</script>
