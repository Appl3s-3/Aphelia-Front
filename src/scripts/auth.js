const authConfig = {
    auth_uri: "https://student.sbhs.net.au/api/authorize",
    token_uri: "https://student.sbhs.net.au/api/token"
}

const clientConfig = {
    client_id: "apheleia",
    redirect_uri: "https://apheleia.pages.dev/callback",
    response_type: "code",
    scope: "all-ro"
}

export function handle_code(code) {
    console.log("e");
    console.log(code);
}

export function login(state="abc") {
    // Construct address from auth_uri
    // Gets keys from the clientConfig, maps them to a string: "key=value" then joins all the strings with "&"
    // Then appends the state
    var uri = `${authConfig["auth_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&state=${state}`;
    // Redirect to address
    location.href = uri;
}