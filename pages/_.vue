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
    this.iframeSrc = `/stac-browser/${this.$route.hash}`;
    window.addEventListener("message", (evt) => {
      if (evt.data && evt.data.navigate && this.firstLoadDone) {
        const path =
          this.$route.path.at(-1) == "/"
            ? this.$route.path.slice(0, -1)
            : this.$route.path;
        history.replaceState({}, null, `${path}/#${evt.data.navigate}`);
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
