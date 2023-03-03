import * as api from "../../api/index.mjs";
import * as templates from "../../templates/index.mjs";
import { api_urls } from "../../api/constants.mjs";
 
/**
 * Gets listings based on path.
 * Adds eventlisteners for filters on the browse page.
 */
export async function getListings(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const profileName = params.get("name");
    const searchWord = params.get("searchWord");
    const path = location.pathname;

    const data = { 
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
    }}

    const listingsDiv = document.querySelector("#listings");
    const listings = await api.getListings(profileName);

    switch(path){
        case "/":
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

        case "/pages/searchResults/" :
            const h1 = document.querySelector("#searchResultsTitle");
            h1.innerText = `Search results for "${searchWord}"`;

            const listingsFiltered = listings.filter((element) => {
                if(element.title.toLowerCase().match(searchWord.toLowerCase())){
                    return true; 
                } else {
                    return false;
                }
            });

            if(listingsFiltered.length === 0){
                const noResults = document.createElement("h2");
                noResults.innerText = "...No results";
                listingsDiv.append(noResults);
            } else {
                
                listingsFiltered.map((listing) => {
                    listingsDiv.append(templates.browseListings(listing));
                });

            }
            break;

        case "/pages/browse/":
            listings.map((listing) => {
                listingsDiv.append(templates.browseListings(listing));
            })

            const activeAuctionsForm = document.querySelector("#activeAuctionsForm");
            const activeAuctionsChBx = document.querySelector("#checkboxActiveAuctions");

            async function filterActiveAuctions(){
                
                const url = `${api_urls.base}${api_urls.listings}?_active=true`;
                const response = await fetch(url, data);
                const activeAuctions = await response.json();
                listingsDiv.innerHTML = "";
                activeAuctions.map((listing) => {
                    listingsDiv.append(templates.browseListings(listing));
                })
                    
            }

            if(activeAuctionsForm){
                activeAuctionsChBx.addEventListener("change", () => {
                    if(activeAuctionsChBx.checked){
                        filterActiveAuctions();
                    } else if(!activeAuctionsChBx.checked){
                        listingsDiv.innerHTML = "";
                        listings.map((listing) => {
                            listingsDiv.append(templates.browseListings(listing));
                        })
                    }
                })
            };

            const ascendingAuctionsForm = document.querySelector("#ascendingForm");
            const ascendingAuctionsChBx = document.querySelector("#checkboxAscending");

            async function filterAscendingAuctions(){

                const url = `${api_urls.base}${api_urls.listings}?sort=title&sortOrder=asc`;
                const response = await fetch(url, data);
                const ascendingAuctions = await response.json();
                listingsDiv.innerHTML = "";
                ascendingAuctions.map((listing) => {
                    listingsDiv.append(templates.browseListings(listing));
                })
                    
            }

            if(ascendingAuctionsForm){
                ascendingAuctionsChBx.addEventListener("change", () => {
                    if(ascendingAuctionsChBx.checked){
                        filterAscendingAuctions();
                    } else if(!ascendingAuctionsChBx.checked){
                        listingsDiv.innerHTML = "";
                        listings.map((listing) => {
                            listingsDiv.append(templates.browseListings(listing));
                        })
                    }
                })
            };

            const artForm = document.querySelector("#artForm");
            const artChBx = document.querySelector("#checkboxArt");
            
            async function filterArtAuctions(){
                const url = `${api_urls.base}${api_urls.listings}?_tag=art`;
                const response = await fetch(url, data);
                const artAuctions = await response.json();
                console.log(artAuctions);

                listingsDiv.innerHTML = "";
                artAuctions.map((listing) => {
                    listingsDiv.append(templates.browseListings(listing));
                })
            };

            if(artForm){
                artChBx.addEventListener("change", () => {
                    if(artChBx.checked){
                        filterArtAuctions();
                    } else if(!artChBx.checked){
                        listingsDiv.innerHTML = "";
                        listings.map((listing) => {
                            listingsDiv.append(templates.browseListings(listing));
                        })
                    }
                })
            }
            break;
        
        
    };
    
}