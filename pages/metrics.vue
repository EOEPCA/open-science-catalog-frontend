<template>
  <div class="metrics-wrapper">
    <iframe
      id="metricsIframe"
      :src="iframeSrc"
      title="Metrics"
      width="100%"
      height="100%"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
import fontUrl from "~/static/css/fonts/notesesabold/NotesESAbold.ttf";

export default {
  name: "MetricsPage",
  computed: {
    iframeSrc() {
      const baseUrl = this.$config.staticEndpoint || "";
      const apiUrl = this.$config.backendEndpoint || "";

      const params = new URLSearchParams({
        baseUrl,
        apiUrl,
        fontUrl,
      });

      return `/metrics.html?${params.toString()}`;
    },
  },
};
</script>

<style scoped>
.metrics-wrapper {
  width: 100%;
  height: 100%;
}
</style>
