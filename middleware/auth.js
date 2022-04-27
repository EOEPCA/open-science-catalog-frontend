export default function ({ store, redirect, $OIDC }) {
  console.log($OIDC)
  if (!process.server) {
    console.log('test')
    return redirect('/')
  }
}
