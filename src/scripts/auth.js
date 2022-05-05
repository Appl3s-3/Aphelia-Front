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
    const body = `grant_type=authorization_code&redirect_uri=${clientConfig.redirect_uri}&client_id=${clientConfig.client_id}&code=${code}`
    let response = await fetch(authConfig.token_uri, {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: body}
        ).catch(e => console.log(e));
        
    let tokens = await response.json();
    console.log("response:");
    console.log(tokens);
}

export function login() {
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var uri = `${authConfig["auth_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&response_type=code&state=${"login"}`;
    // Redirect to address
    location.href = uri;
}