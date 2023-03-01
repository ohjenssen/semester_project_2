import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";
import * as components from "../../components/index.mjs";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const data = { 
    method: "GET",
    headers: {
        "Authorization": `Bearer ${storage.getAccessToken()}`,
        "Content-type": "application/json; charset=UTF-8"
}};

export async function getSingleListing(){
    const url =`${api_urls.base}${api_urls.listings}/${id}?_seller=true&_bids=true`;

    const response = await fetch(url, data);
    if(response.ok){
        components.removeLoader();
    }
    const json = await response.json();
    return json;
};