export default (_, inject) => {
  inject('auth', {
    enabled: false,
    loggedin: false
  })
}
