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

async function create_code_challenge() {
    // Verifier
    var out = "";
    var chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890";
    var len = 10;
    for (var i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }

    // Challenge
    // some code borrowed from https://github.com/mintcarrotkeys/generic-bells/blob/main/src/apiFetcher.js
    const encoder = new TextEncoder();
    const data = encoder.encode(out);
    let hash;
    await crypto.subtle.digest('SHA-256', data).then(res => hash=res).catch(e => console.log(e));
    let hashString = "";
    for (const i of new Uint8Array(hash)) {
        hashString += String.fromCharCode(i);
    }

    return [out, window.btoa(hashString).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_")];
}

function gen_state() {
    var out = "";
    var chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIKLMNOPQRSTUVWXYZ";
    var len = 10;
    for (var i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
}


export function handle_code(params) {
    // check state
    let state = params.query.state;
    if (state != window.localStorage.getItem("authState")) {
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
    console.log("after redirect verif: " + window.localStorage.getItem("codeVerifier"))
    const body = stringify({
        code_verifier: window.localStorage.getItem("codeVerifier"),
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

export async function login() {
    var [codeVerifier, codeChallenge] = await create_code_challenge();
    console.log("verifier: " + codeVerifier);
    console.log("challenge: " + codeChallenge);
    window.localStorage.setItem("codeVerifier", codeVerifier);
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var state = gen_state();
    window.localStorage.setItem("authState", state);

    var uri = authConfig["auth_uri"] + "?" + stringify({
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