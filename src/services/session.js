export const session = () => {
    const fb = sessionStorage.getItem('fb')
    const google = sessionStorage.getItem('google')
    let loggedIn = false
  
    if (fb || google) {
      loggedIn = true
    }
  
    return loggedIn
}


