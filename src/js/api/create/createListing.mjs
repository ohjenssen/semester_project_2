import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

export async function createListing(formInfo){

    const data = { 
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
    };

    try { 
        const url = `${api_urls.base}${api_urls.listings}`;
        const response = await fetch(url, data);
        const json = await response.json();
        console.log(data)
        console.log(response)
        console.log(json);
        
        if(response.ok){
            window.location.replace("/");
        }
    } catch (error) {
        
    }
};