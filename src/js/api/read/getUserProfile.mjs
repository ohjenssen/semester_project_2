import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

export async function getUserProfile(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const name = params.get("name");

    const profileUrl = `${api_urls.base}${api_urls.profile}${name}?_listings=true`;

    const response = await fetch(profileUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await response.json();
    return json;
}
