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
  data: () => ({
    parsedContent: null,
  }),
  async created() {
    this.parsedContent = await this.$content("privacy-notice").fetch();
  },
};
</script>

<style scoped>
::v-deep h3,
::v-deep h4 {
  padding-top: 60px;
  margin-top: -60px;
}
::v-deep ul,
::v-deep ol {
  padding-bottom: 16px;
}
::v-deep thead {
  background: lightgrey;
}
::v-deep th,
::v-deep td {
  padding: 10px;
}
</style>
