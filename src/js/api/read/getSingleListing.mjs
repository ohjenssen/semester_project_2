import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";
import * as components from "../../components/index.mjs";

/**
 * Function fethcing a single listing using the id provied by the url parameter;
 * @returns {object} Object containg names and values for the listing;
 */
export async function getSingleListing(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const data = { 
        method: "GET",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
    }};

    const url =`${api_urls.base}${api_urls.listings}/${id}?_seller=true&_bids=true`;

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
};