import { api_urls } from "../constants.mjs";
import * as templates from "../../templates/index.mjs";


/**
 * 
 * @param {object} profileData Object from the form to be used in the body.
 * If the response is ok, user is redirected to the login page.
 * ```
 * const profile = { name: 'johndoe', email:, 'johndoe@stud.noroff.no', password: 'pass123', avatar: 'urlImageLink.url', banner: 'urlImageLink.url };
 * loginUser(profile);
 * ```
 */
export async function registerUser(profileData){
    const data = {
        method: "POST",
        body: JSON.stringify(profileData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const registerUrl = api_urls.base + api_urls.register;
    const registerBtn = document.querySelector("#registerBtn");

    try {

        const response = await fetch(registerUrl, data);
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
    } catch(error) {
        window.location.replace("/pages/errorPage/");
    }

}