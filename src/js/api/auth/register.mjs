import { api_urls } from "../constants.mjs";

export async function registerUser(profileData){
    const registerUrl = api_urls.base + api_urls.register;

    const response = await fetch(registerUrl, {
        method: "POST",
        body: JSON.stringify(profileData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await response.json();
    const errorMessage = json.errors[0].message;

    if(response.ok){
        window.location.replace("../login/")
    } else if(!response.ok){
        const pTag = document.querySelector("#errorTag");
        pTag.innerHTML = errorMessage;
    }

}