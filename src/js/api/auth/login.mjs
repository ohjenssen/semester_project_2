import { api_urls } from "../constants.mjs";

export async function loginUser(profileData){
    const loginUrl = api_urls.base + api_urls.login;

    const response = await fetch(loginUrl, {
        method: "POST",
        body: JSON.stringify(profileData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await response.json();
    
    if(response.ok){
        localStorage.setItem("profileInfo", JSON.stringify(json));
        localStorage.setItem("accessToken", JSON.stringify(json.accessToken));
        localStorage.setItem("avatar", JSON.stringify(json.avatar));
        window.location.replace("/");
    } else if(!response.ok){
        const errorMessage = await json.errors[0].message;
        const pTag = document.querySelector("#errorTag");
        pTag.innerHTML = errorMessage;
    }
}