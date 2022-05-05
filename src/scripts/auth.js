import "https"

const authConfig = {
    auth_uri: "https://student.sbhs.net.au/api/authorize",
    token_uri: "https://student.sbhs.net.au/api/token"
}

const clientConfig = {
    client_id: "apheleia",
    redirect_uri: "https://apheleia.pages.dev/callback",
    scope: "all-ro"
}

export function handle_code(params) {
    let state = params.query.state;
    if (state == "login") { // Get token
        let code = params.query.code;
        get_token(code);
    } else if (state == "token") { // Save tokens
        let accessToken = params.query.access_token;
        let refreshToken = params.query.refresh_token;
        // store tokens in localStorage
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
    }
}

export async function get_token(code) {
    // With help from https://github.com/mintcarrotkeys/generic-bells/blob/main/src/apiFetcher.js
    let response = await fetch(authConfig.token_uri, {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: `?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&grant_type=authorization_code&code=${code}&state=${"token"}`}
        ).catch(e => console.log(e));
    // Construct address from auth_uri, this is almost the same as login
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state & code
    //var uri = `${authConfig["token_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&grant_type=authorization_code&code=${code}&state=${"token"}`;
    console.log(response.json())
}

export function login() {
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var uri = `${authConfig["auth_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&response_type=code&state=${"login"}`;
    // Redirect to address
    location.href = uri;
}