import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

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