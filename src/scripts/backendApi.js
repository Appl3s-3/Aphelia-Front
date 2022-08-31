const uri = "0.0.0.1:8080"

export async function get_items() {
    let response = false;
    await fetch(uri + "/items", {method: "GET",
        headers: {'Authorization': "Bearer " + sessionStorage["userId"]}} // replace with access token later
        ).then(r => response=r).catch(e => console.log(e));
    let data = response.json();
}