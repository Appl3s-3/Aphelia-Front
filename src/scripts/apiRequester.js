async function get_user_info() {
    const uri = "https://student.sbhs.net.au/api/details/userinfo.json";
    var accessToken = localStorage["accessToken"];
    var accessTokenExpiry = localStorage["accessTokenExpiry"];
    console.log("Expiry: " + accessTokenExpiry);
    if (accessToken !== null && accessTokenExpiry !== null) { // Token exists
        if (new Date(Date.parse(accessTokenExpiry)) > new Date(Date.now())) { // Token is still valid
            let response = false;
            await fetch(uri, {headers: {'Authorization': accessToken}}
                ).then(r => response=r).catch(e => console.log(e));
            return response.json()
        }
    }
    return null;
}

export async function get_id() {
    var info = await get_user_info()
    if (info !== null) {
        return info["username"];
    } else {
        return null;
    }
}