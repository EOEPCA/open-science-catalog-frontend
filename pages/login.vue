<template>
  <v-progress-circular
    v-if="$auth"
    :size="70"
    :width="5"
    color="primary"
    indeterminate
    class="ma-8"
  />
  <p
    v-else
  >
    Authentication is currently disabled.
  </p>
</template>

<script>
export default {
  async mounted () {
    if (!this.$config.authEnabled) {
      return
    }
    if (this.$auth.loggedIn) {
      await this.$auth.loginWith('oidc')
    } else {
      this.$router.push('/')
    }
  }
}
</script>
