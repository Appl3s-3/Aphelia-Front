import "https"
import "querystring"
import { stringify } from "querystring";

const authConfig = {
    auth_uri: "https://student.sbhs.net.au/api/authorize",
    token_uri: "https://student.sbhs.net.au/api/token"
}

const clientConfig = {
    client_id: "apheleia",
    redirect_uri: "https://apheleia.pages.dev/callback",
    scope: "all-ro"
}

function create_code_challenge() {
    var out = "";
    var chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890";
    var len = 10;
    for (var i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * 62)];
    }

    var digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(out));

    return [out, window.btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')];
}

function gen_state() {
    var out = "";
    var chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIKLMNOPQRSTUVWXYZ";
    var len = 10;
    for (var i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * 52)];
    }
    return out;
}


export function handle_code(params) {
    // check state
    let state = params.query.state;
    if (state != localStorage.getItem("authState")) {
        console.log("bad state")
    } else { // good state
        let code = params.query.code;
        get_token(code);
        /*
        let accessToken = params.query.access_token;
        let refreshToken = params.query.refresh_token;
        // store tokens in localStorage
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        */
    }
}

export async function get_token(code) {
    // With help from https://github.com/mintcarrotkeys/generic-bells/blob/main/src/apiFetcher.js
    //const body = `grant_type=authorization_code&redirect_uri=${clientConfig.redirect_uri}&client_id=${clientConfig.client_id}&code=${code}`
    const body = stringify({
        code_verifier: window.sessionStorage.getItem("codeVerifier"),
        grant_type: "authorization_code",
        redirect_uri: clientConfig.redirect_uri,
        client_id: clientConfig.client_id,
        code: code,
    })
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
    var [codeVerifier, codeChallenge] = create_code_challenge();
    console.log("verifier: " + codeVerifier);
    console.log("callenge: " + codeChallenge);
    window.sessionStorage.setItem("codeVerifier", codeVerifier);
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var state = gen_state();
    localStorage.setItem("authState", state);
    //var uri = `${authConfig["auth_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&response_type=code&state=${state}`;
    var uri = authConfig["auth_uri"] + stringify({
        client_id: clientConfig.client_id,
        redirect_uri: clientConfig.redirect_uri,
        scope: clientConfig.scope,
        response_type: "code",
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
    });
    // Redirect to address
    location.href = uri;
}