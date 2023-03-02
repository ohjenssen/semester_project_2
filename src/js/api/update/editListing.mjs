import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";
import * as storage from "../../localStorage/index.mjs";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function editListing(body){

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