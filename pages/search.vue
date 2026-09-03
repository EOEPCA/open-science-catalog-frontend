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
  data() {
    return {
      productBaseUrl: "",
    };
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

      if (this.productBaseUrl) {
        params.set("productBaseUrl", this.productBaseUrl);
      }

      return `/search.html?${params.toString()}`;
    },
  },
  mounted() {
    this.productBaseUrl =
      window.location.origin + (this.$router?.options?.base || "/");
  },
};
</script>

<style scoped>
.search-wrapper {
  width: 100%;
  height: 100%;
}
</style>
