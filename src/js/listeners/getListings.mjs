import * as api from "../api/index.mjs";
import * as templates from "../templates/index.mjs";
 
export async function getListings(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const profileName = params.get("name");
    const id = params.get("id");

    const listingsDiv = document.querySelector("#listings");
    const listings = await api.getListings(id, profileName);
    console.log(listings);

    listingsDiv.append(templates.userProfilePosts(listings));
}