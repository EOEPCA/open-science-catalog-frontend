<template>
  <div class="search-wrapper">
    <iframe
      id="searchIframe"
      src="/search.html"
      title="Search"
      width="100%"
      height="100%"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
};
</script>

<style scoped>
.search-wrapper {
  width: 100%;
  height: 100%;
}
</style>
