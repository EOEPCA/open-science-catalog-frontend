module.exports = {
  extends: "@eox",
  ignorePatterns: ["dist"],
  env: {
    jest: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
