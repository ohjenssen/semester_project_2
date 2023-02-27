import * as api from "../api/index.mjs";
import * as templates from "../templates/index.mjs";
 
export async function getListings(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const profileName = params.get("name");
    const path = location.pathname;

    const listingsDiv = document.querySelector("#listings");
    const listings = await api.getListings(profileName);

    switch(path){
        case "/":
            console.log(listings)
            listings.map((listing) => {
                listingsDiv.append(templates.browseListings(listing));
            })
            break;

        case "/pages/profilePage/":
            if(listings.length === 0){
                    listingsDiv.append(templates.noListings());
                } else {
                    listings.map((listing) => {
                        listingsDiv.append(templates.userProfilePosts(listing));
                    })
            }
            break;

        case "/pages/otherProfiles/" :
            if(listings.length === 0){
                listingsDiv.append(templates.noListings());
            } else {
                listings.map((listing) => {
                    listingsDiv.append(templates.browseListings(listing))
                })
            }
            break;
        
        
    };
    
}