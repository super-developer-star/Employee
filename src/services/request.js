export const request = (step, data) => {
    const url = `https://my.agentify.me/api/V0/Profile/${step}`
    console.log(url, data);
    fetch(url, {
        method: "POST",
        mode: 'cors',
        body: data
    }).then(response => {
        console.log("res", response);
        return response;
    });
}