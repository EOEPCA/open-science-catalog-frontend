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
  async mounted () {
    if (!this.$auth.loggedIn) {
      await this.$auth.loginWith('oidc')
    } else {
      this.$router.push('/')
    }
  }
}
</script>
