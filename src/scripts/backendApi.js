const uri = "http://0.0.0.0:8000"

export async function get_items() {
    let response = false;
    await fetch(uri + "/items", {method: "GET",
        headers: {'Authorization': "Bearer " + sessionStorage["userId"], // replace with access token later
        'Accept': 'application/json'}
        }
        ).then(r => response=r).catch(e => console.log(e));
    //let data = response.json();
    console.log(response);
}