// TODO use hardcoded colors instead of hashed strings?
const md5 = require('md5')

export default (_, inject) => {
  inject('textToHex', (str) => {
    const md5Hash = md5(str)
    let hash = 0
    for (let i = 0; i < md5Hash.length; i++) {
      hash = md5Hash.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF
      color += ('00' + value.toString(16)).slice(-2)
    }
    return color
  })
}
