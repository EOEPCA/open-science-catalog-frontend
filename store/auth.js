export const state = () => ({
  isLoggedIn: true
})

export const mutations = {
  toggleLogin (state) {
    state.isLoggedIn = !state.isLoggedIn
  }
}
