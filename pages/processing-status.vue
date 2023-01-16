<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">Processing status</h2>
    <iframe
      src="/processing-status.html"
      frameborder="0"
      width="100%"
      height="1000px"
      scrolling="no"
      style="overflow: hidden"
    />
  </v-container>
</template>
