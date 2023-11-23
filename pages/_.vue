<template>
  <div class="browse">
    <iframe
      id="stacBrowser"
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
    this.iframeSrc = this.stacBrowserPath(this.$route.fullPath);

    window.addEventListener("message", (evt) => {
      if (evt.data && evt.data.navigate && this.firstLoadDone) {
        const innerPath = evt.data.navigate.replace(".json", "");
        history.replaceState(
          {},
          null,
          `${innerPath.length > 1 ? innerPath : "/catalog"}`
        );
      } else {
        this.firstLoadDone = true;
      }
    });
  },
  methods: {
    prepareEndpoint(src) {
      return src.replace("https://", "").replace("http://", "");
    },
    stacBrowserPath(path) {
      let hashPath = path.length > 1 ? path + ".json" : "";
      return `/stac-browser/#${hashPath}`;
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
