<template>
  <div>
    OAuth
    <button @click="$OIDC.logout">
      Log out
    </button>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$OIDC.restoreInfo()
    const token = this.$OIDC.getAccessToken()
    console.log(this.$OIDC.getUserInfo(token))
  }
}
</script>
