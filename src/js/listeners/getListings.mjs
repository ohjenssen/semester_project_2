import * as api from "../api/index.mjs";
import * as templates from "../templates/index.mjs";
 
export async function getListings(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const profileName = params.get("name");
    const id = params.get("id");

    const listingsDiv = document.querySelector("#listings");
    const listings = await api.getListings(id, profileName);

    if(listings.length === 0){
        listingsDiv.append(templates.noListings());
    } else {
        listings.map((listing) => {
            listingsDiv.append(templates.userProfilePosts(listing))
        })
    }
    
}