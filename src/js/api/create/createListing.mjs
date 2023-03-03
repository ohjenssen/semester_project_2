import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";
import * as storage from "../../localStorage/index.mjs";


/**
 * 
 * @param {object} formInfo Object containing relevant info.
 * Creates a listing and redirects the user to the landing page.
 * @example
 * ```
 * const listingInfo = { title: "Vase", description: "This is an antique vase", tags: ["antique", "old"], media:["urlLink.com", "anotherUrlLink.com"], endsAt: "2023-03-03T12:22:00.000Z"" }
 * createListing(listingInfo);
 * ```
 */
export async function createListing(formInfo){
    console.log(formInfo);
    const data = { 
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
    };

    const url = `${api_urls.base}${api_urls.listings}`;
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.innerHTML = "";
    submitBtn.append(templates.addLoader());

    try { 
        const response = await fetch(url, data);
        const json = await response.json();
        
        if(response.ok){
            window.location.replace("/");
        } else {
            const errorMessage = document.querySelector("#errorTag");
            errorMessage.innerText = json.errors[0].message;
            submitBtn.innerHTML = "Create";
        }
    } catch (error) {
        console.log(error);
    }
};