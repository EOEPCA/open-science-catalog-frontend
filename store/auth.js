export const state = () => ({
  isLoggedIn: false
})

export const mutations = {
  toggleLogin (state) {
    state.isLoggedIn = !state.isLoggedIn
  }
}
