import { api_urls } from "../constants.mjs";
import * as components from "../../components/index.mjs";
import * as storage from "../../localStorage/index.mjs";


/**
 * 
 * @param {string} profileName Variable to be used for the profile pages.
 * @example
 * ```
 * const name = "johnDoe";
 * getListings(name);
 * ```
 * @returns {array} Array of objects containing all listings by different profiles.
 */

export async function getListings(profileName){
    const data = { 
        method: "GET",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
    }}

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

    try {
        const response = await fetch(url, data);
        if(response.ok){
            components.removeLoader();
        }
        const json = await response.json();
        return json;
    } catch(error) {
        window.location.replace("/pages/errorPage/");
    }
}