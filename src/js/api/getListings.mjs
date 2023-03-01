import { api_urls } from "./constants.mjs";
import * as components from "../components/index.mjs";
import * as storage from "../localStorage/index.mjs";

const data = { 
    method: "GET",
    headers: {
        "Authorization": `Bearer ${storage.getAccessToken()}`,
        "Content-type": "application/json; charset=UTF-8"
}}

export async function getListings(profileName){
    let url = api_urls.base;
    const path = location.pathname;
    
    switch (path){
        case "/":
            url += `${api_urls.listings}?_active=true`;
            break;

        case "/pages/searchResults/":
            url += `${api_urls.listings}`;
            break;

        case "/pages/browse/":
            url += `${api_urls.listings}`;
            break;

        case "/pages/profilePage/":
            url += `${api_urls.profile}${profileName}/listings`;
            break;

        case "/pages/otherProfiles/":
            url += `${api_urls.profile}${profileName}/listings`;
            break;

        case "/pages/browse/":
            url += `${api_urls.listings}`;
            break;

    }

    const response = await fetch(url, data);
    if(response.ok){
        components.removeLoader();
    }
    const json = await response.json();
    return json;
}