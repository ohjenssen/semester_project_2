import { api_urls } from "./constants.mjs";
import * as localStorage from "../localStorage/index.mjs";

export async function getUserProfile(){
    const profileUrl = `${api_urls.base}${api_urls.profile}${localStorage.getUserName()}?_listings=true`;
    const accessToken = localStorage.getAccessToken();

    const response = await fetch(profileUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await response.json();
    return json;
}