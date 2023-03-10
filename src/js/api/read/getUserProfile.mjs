import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

/**
 * Function fethcing a user profile using the name provided in the url parameter.
 * @returns {object} Object containing names and values for the user profile.
 */
export async function getUserProfile(){
    const data = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    };
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const name = params.get("name");

    const profileUrl = `${api_urls.base}${api_urls.profile}${name}?_listings=true`;

    try {
        const response = await fetch(profileUrl, data);
        const json = await response.json();
        return json;
    } catch(error) {
        window.location.replace("/pages/errorPage/");
    }
}
