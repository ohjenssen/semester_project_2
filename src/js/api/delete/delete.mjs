import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

/**
 * 
 * @param {string} id Id to select the right listing.
 * Deletes the selected post.
 * @example
 * ```
 * const listingId = "1234567a-bc391-2d34-e052-119687eb2a68"
 * deleteListing(listingId);
 * ```
 */
export async function deleteListing(id){
    const url = `${api_urls.base}${api_urls.listings}/${id}`;

    const data = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storage.getAccessToken()}`,
        }
    }

    const response = await fetch(url, data);
    if(response.ok){
        window.location.reload();
    }

}