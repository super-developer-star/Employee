export const session = () => {
    const profileId = window.localStorage.getItem('profileId')   
    console.log("profileId", profileId) 
    let loggedIn = false
  
    if (profileId) {
      loggedIn = true
    }
  
    return loggedIn
}


