import Vue from "vue";

const mixin = {
  methods: {
    slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/_/g, "-") // Replace underscores _ with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    },
  },
};

Vue.mixin(mixin);

export default mixin;
