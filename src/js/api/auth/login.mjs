import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";

/**
 * 
 * @param {object} profileData Object from the form to be used in the body.
 * After the call is executed it should store profileinformation along with the accesstoken.
 * @example
 * ```
 * const profile = { email: 'johndoe@stud.noroff.no', password: 'pass123' };
 * loginUser(profile);
 * ```
 */
export async function loginUser(profileData){
    const data = {
                method: "POST",
                body: JSON.stringify(profileData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
    }

    const loginUrl = api_urls.base + api_urls.login;
    const loginBtn = document.querySelector("#loginBtn");

    loginBtn.innerHTML = "";
    loginBtn.append(templates.addLoader());
    
    try {
            const response = await fetch(loginUrl, data)
            const json = await response.json();
            
            if(response.ok){
                localStorage.setItem("profileInfo", JSON.stringify(json));
                localStorage.setItem("accessToken", JSON.stringify(json.accessToken));
                localStorage.setItem("avatar", JSON.stringify(json.avatar));
                window.location.replace("/");
            } else if(!response.ok){
                loginBtn.innerHTML = "LOGIN";
                const errorMessage = await json.errors[0].message;
                const pTag = document.querySelector("#errorTag");
                pTag.innerHTML = errorMessage;
            }
    } catch(error) {
        console.log(error);
    }
}