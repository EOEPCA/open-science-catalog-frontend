<template>
  <div class="browse">
    <iframe
      :src="iframeSrc"
      border="none"
      style="width: 100%; height: 100%"
    ></iframe>
    <edit-button />
  </div>
</template>

<script>
export default {
  data: () => ({
    iframeSrc: null,
    firstLoadDone: false,
  }),
  mounted() {
    this.iframeSrc = `/stac-browser/?external=${this.prepareEndpoint(
      this.$config.staticEndpoint
    )}${this.$route.path}.json`;
    window.addEventListener("message", (evt) => {
      if (evt.data && evt.data.navigate && this.firstLoadDone) {
        const stringToReplace = `/external/${this.prepareEndpoint(
          this.$config.staticEndpoint
        )}`;
        const parsedPath = evt.data.navigate
          .replace(stringToReplace, "")
          .replace(".json", "");
        history.replaceState({}, null, parsedPath);
      } else {
        this.firstLoadDone = true;
      }
    });
  },
  methods: {
    prepareEndpoint(src) {
      return src.replace("https://", "").replace("http://", "");
    },
  },
};
</script>

<style scoped>
.browse {
  width: 100%;
  height: 100%;
}
</style>
