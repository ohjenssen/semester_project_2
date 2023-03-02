import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";
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

    const url = `${api_urls.base}${api_urls.listings}`;
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.innerHTML = "";
    submitBtn.append(templates.addLoader());

    try { 
        const response = await fetch(url, data);
        const json = await response.json();
        console.log(json);
        
        if(response.ok){
            window.location.replace("/");
        } else {
            const errorMessage = document.querySelector("#errorTag");
            errorMessage.innerText = json.errors[0].message;
            submitBtn.innerHTML = "Create";
        }
    } catch (error) {
        
    }
};