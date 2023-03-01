import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";

export async function registerUser(profileData){
    const registerUrl = api_urls.base + api_urls.register;
    const registerBtn = document.querySelector("#registerBtn");

    const response = await fetch(registerUrl, {
        method: "POST",
        body: JSON.stringify(profileData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await response.json();
    registerBtn.innerHTML = "";
    registerBtn.append(templates.addLoader());

    
    if(response.ok){
        window.location.replace("../login/")
    } else if(!response.ok){
        registerBtn.innerHTML = "REGISTER";
        const errorMessage = json.errors[0].message;
        const pTag = document.querySelector("#errorTag");
        pTag.innerHTML = errorMessage;
    }
}