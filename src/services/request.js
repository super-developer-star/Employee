export const request = (step, userInfo) => {
    const url = `http://api.skyhr.net/api/V0/Profile/${step}`
    console.log(url, userInfo);
    fetch(url, {
        method: "POST",
        mode: 'cors',
        body: userInfo
    }).then(response => {
        console.log("res", response);
        return response;
    });
}