import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";
import * as storage from "../../localStorage/index.mjs";

/**
 * 
 * @param {object} body Object containing names and values to be used in the call.
 * Function that updates the selected listing with new information.
 * @example
 * ```
 * const newInfo = {    
*                       title: "New title", 
*                       description: "Forgot to mention this about the listing", 
                        tags: ["awesome", "new"], 
                        media: ["originalImage.url", "addedSecondImage.url"] 
                    };
 * editListing(newInfo);
 * ```
 */
export async function editListing(body){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const data = { 
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(body),
    };
    
    const url = `${api_urls.base}${api_urls.listings}/${id}`;
    const submitBtn = document.querySelector("#editBtn");
    submitBtn.innerHTML = "";
    submitBtn.append(templates.addLoader());

    try {
        const response = await fetch(url, data);
        const json = await response.json();

        if(response.ok){
            window.location.replace(`/pages/listing/?id=${id}`);
        } else {
            submitBtn.innerHTML = "Update";
            const errorMessage = document.querySelector("#errorTag");
            errorMessage.innerText = json.errors[0].message;
        }

    } catch(error) {
        console.log(error);
    }



}