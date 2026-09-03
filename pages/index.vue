<template>
  <div class="index-wrapper">
    <iframe
      id="indexIframe"
      :src="iframeSrc"
      title="Open Science Catalog"
      width="100%"
      height="100%"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
import fontUrl from "~/static/css/fonts/notesesabold/NotesESAbold.ttf";

export default {
  name: "IndexPage",
  head: {
    titleTemplate: "ESA Open Science Catalog",
  },
  computed: {
    iframeSrc() {
      const baseUrl = this.$config.staticEndpoint || "";
      const apiUrl = this.$config.backendEndpoint || "";

      const params = new URLSearchParams({
        baseUrl,
        apiUrl,
        fontUrl,
      });

      return `/index-static.html?${params.toString()}`;
    },
  },
};
</script>

<style scoped>
.index-wrapper {
  width: 100%;
  height: 100%;
}
</style>
