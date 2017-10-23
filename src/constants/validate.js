export function emailValidate(email){
    var reg_exp = /^(([^<>()\\[\]\\.,:\s@"]+(\.[^<>()\\[\]\\.,:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (reg_exp.test(email)){
        return true
    }
    return false
}

export function palceValidate(password){
    if (password.length >= 2) {
        return true
    }
    return false
}

export function fullnameValidate(name){
    if (name.indexOf(" ") > 0 && name.indexOf(" ") < name.length - 1){
        return true
    }
    return false
}

export function socialValidate(value){
    let email = value.toLowerCase()   
    if (email.indexOf('linkedin.com') !== -1 || email.indexOf('google.com') !== -1 || email.indexOf('behance.com') !== -1 || email.indexOf('facebook.com') !== -1 || email.indexOf('github.com') !== -1) {
        return true
    }
    return false
}