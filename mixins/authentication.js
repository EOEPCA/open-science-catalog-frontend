export default {
  mounted () {
    console.log(this.$OIDC.restoreInfo())
    const loginRequest = this.$OIDC.generateLoginRequest({
      scope: 'openid profile email',
      response_type: 'token id_token'
    })
    console.log(loginRequest)
  }
}
