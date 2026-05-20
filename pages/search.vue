<template>
  <div class="search-wrapper">
    <iframe
      id="searchIframe"
      :src="iframeSrc"
      title="Search"
      width="100%"
      height="100%"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
import fontUrl from "~/static/css/fonts/notesesabold/NotesESAbold.ttf";

export default {
  name: "SearchPage",
  computed: {
    iframeSrc() {
      const baseUrl = this.$config.staticEndpoint || "";
      const apiUrl = this.$config.backendEndpoint || "";

      const params = new URLSearchParams({
        baseUrl,
        apiUrl,
        fontUrl,
      });

      return `/search.html?${params.toString()}`;
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  width: 100%;
  height: 100%;
}
</style>
