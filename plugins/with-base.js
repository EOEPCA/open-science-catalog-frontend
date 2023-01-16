import Vue from "vue";

const mixin = {
  methods: {
    withBase(path) {
      let newPath = path;
      if (process.env.ROUTER_BASE) {
        newPath = `${process.env.ROUTER_BASE}${path.replace("/", "")}`;
      }
      return newPath;
    },
  },
};

Vue.mixin(mixin);

export default mixin;
