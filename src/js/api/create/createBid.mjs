import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

export async function createBid(amount){

    const data = { 
        method: "POST",
        body: JSON.stringify(amount),
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
    };

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const url = `${api_urls.base}${api_urls.listings}/${id}/bids`;
    const response = await fetch(url, data)
    const json = response.json();
    console.log(response);
    console.log(json);
}