import "https"
import "querystring"
import { stringify } from "querystring";
import { get_id } from "./apiRequester";

const authConfig = {
    auth_uri: "https://student.sbhs.net.au/api/authorize",
    token_uri: "https://student.sbhs.net.au/api/token"
}

const clientConfig = {
    client_id: "apheleia",
    redirect_uri: "https://apheleia.pages.dev/callback",
    scope: "all-ro" // "all read-only" (only scope)
}

async function create_code_challenge() {
    // Verifier
    var out = "";
    var chars = "abcdefghijklmnopqrstuvwxzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890-_.~";
    var len = 64;
    // Generate random string
    for (var i = 0; i < len; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }

    // Challenge
    // some code borrowed from https://github.com/mintcarrotkeys/generic-bells/blob/main/src/apiFetcher.js
    // Hash verifier
    async function sha256(plain) {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        
        return window.crypto.subtle.digest('SHA-256', data)
    }
    // Base 64 encode hashed verifier
    function base64urlencode(a) {
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a))).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_")
    }
    
    const hashed = await sha256(out)
    const codeChallenge = base64urlencode(hashed)

    return [out, codeChallenge];
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


export async function handle_code(params) {
    // check state
    let state = params.query.state;
    if (state != localStorage.getItem("authState")) {
        console.log("bad state")
    } else { // good state
        let code = params.query.code;
        get_token(code);
        // get user id and store it
        var id = await get_id();
        console.log("ID: " + id);
        if (id !== null) {
            sessionStorage["userId"] = id;
        }
    }
}

export async function refresh_token() {
    // Sends a post request to the token endpoint
    var expiry = new Date(Date.parse(localStorage.getItem("accessTokenExpiry")));
    if (expiry <= new Date(Date.now())) { // Need new token
        var refreshToken = localStorage.getItem("refreshToken");
        const body = stringify({
            grant_type: "refresh_token",
            client_id: clientConfig.client_id,
            refresh_token: refreshToken,
        })
        let response = await fetch(authConfig.token_uri, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: body}
            ).catch(e => console.log(e));
            
        let tokens = await response.json();
        console.log("response:");
        console.log(tokens);
        localStorage.setItem("accessToken", tokens.access_token);
        localStorage.setItem("accessTokenExpiry", new Date(Date.now() + (response.expires_in - 5)*1000).toString()); // creates date now + 1h - 5 seconds
        localStorage.setItem("refreshToken", tokens.refresh_token);
    }
}

export async function get_token(code) {
    // Sends a post request to the token endpoint
    // With help from https://github.com/mintcarrotkeys/generic-bells/blob/main/src/apiFetcher.js
    console.log("after redirect verif: " + localStorage.getItem("codeVerifier"))
    const body = stringify({
        code_verifier: localStorage.getItem("codeVerifier"),
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
    localStorage.setItem("accessToken", tokens.access_token);
    localStorage.setItem("accessTokenExpiry", new Date(Date.now() + (response.expires_in - 5)*1000)); // creates date now + 1h - 5 seconds
    localStorage.setItem("refreshToken", tokens.refresh_token);
}

export async function login() {
    var [codeVerifier, codeChallenge] = await create_code_challenge();
    console.log("verifier: " + codeVerifier);
    console.log("challenge: " + codeChallenge);
    localStorage.setItem("codeVerifier", codeVerifier);
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var state = gen_state();
    localStorage.setItem("authState", state);

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