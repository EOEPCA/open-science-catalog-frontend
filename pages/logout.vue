<template>
  <v-progress-circular
    :size="70"
    :width="5"
    color="primary"
    indeterminate
    class="ma-8"
  />
</template>

<script>
export default {
  name: "LogoutPage",
  mounted() {
    if (this.$auth.loggedIn) {
      this.$auth.$storage.setState("redirect", undefined);
      this.$auth.logout();
    } else {
      this.$router.push("/");
    }
  },
};
</script>
