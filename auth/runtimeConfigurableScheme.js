import { OpenIDConnectScheme } from '@nuxtjs/auth-next/dist/runtime.js'
export default class RuntimeConfigurableOpenIDConnectScheme extends OpenIDConnectScheme {
  constructor ($auth, options) {
    const configOptions = {
      ...options,
      ...$auth.ctx.$config.auth.strategies[options.name]
    }
    super($auth, configOptions)
  }
}
