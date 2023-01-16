<template>
  <v-progress-circular
    v-if="$config.authEnabled"
    :size="70"
    :width="5"
    color="primary"
    indeterminate
    class="ma-8"
  />
  <p v-else class="pa-5">Authentication is currently disabled.</p>
</template>

<script>
export default {
  name: "LoginPage",
  async mounted() {
    if (!this.$config.authEnabled) {
      return;
    }
    if (!this.$auth.loggedIn) {
      await this.$auth.loginWith("oidc");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
