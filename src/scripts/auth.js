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

export function login(state="abc") {
    // Construct address
    var uri = `${authConfig["auth_uri"]}?${Object.keys(clientConfig).map(x => `${x}=${clientConfig[x]}`).join("&")}&state=${state}`;

    location.href = uri;
}