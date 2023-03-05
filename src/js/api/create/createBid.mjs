import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

/**
 * 
 * @param {object} amount Object containing a single name and value
 * Posts the bid and if the response is ok, the site reloads enabling the user to see their bid posted.
 * @example
 * ```
 * const bid = { amount : 10 };
 * createBid(bid)
 * ```
 */
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

    try {
        const response = await fetch(url, data);
        const json = await response.json();

        if(response.ok){
            location.reload();
        } else {
            const errorMessage = await json.errors[0].message;
            const pTag = document.querySelector("#errorTag");
            pTag.innerText = errorMessage;
        }
    } catch(error) {
        window.location.replace("/pages/errorPage/");
    }
}