export default (_, inject) => {
  const clientInfo = {
    client_id: '2af21e66-bd47-4894-b91e-2f3d6c07d99e',
    redirect_uri: 'http://localhost:3000/oauth-callback'
  }
  const providerInfo = OIDC.discover('https://auth.develop.eoepca.org')
  OIDC.setClientInfo(clientInfo)
  OIDC.setProviderInfo(providerInfo)
  OIDC.storeInfo(providerInfo, clientInfo)
  sessionStorage.removeItem('state')
  sessionStorage.removeItem('nonce')
  OIDC.logout = () => {
    window.open('https://auth.develop.eoepca.org/oxauth/restv1/end_session?post_logout_redirect_uri=http://localhost:3000')
  }
  inject('OIDC', OIDC)
}
