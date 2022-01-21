export const state = () => ({
  packageVersion: process.env.PACKAGE_VERSION || '0'
})

export const getters = {
  appVersion: state => state.packageVersion
}
