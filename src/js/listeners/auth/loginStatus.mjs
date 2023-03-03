import * as storage from "../../localStorage/index.mjs";
import * as templates from "../../templates/index.mjs";

/**
 * Checks the login status by checking if the accesstoken is there.
 * If accessToken exists, then it appends a user profile and button to the header.
 * Otherwise the register button and login button is appended.
 */
export function checkLoginStatus(){
    const container = document.querySelector("#authContainer");

    if(storage.getAccessToken()){
        container.append(templates.userProfileAvatar());
        container.append(templates.logoutBtn());

    } else if(!storage.getAccessToken()){
        container.append(templates.loginBtn())
        container.append(templates.registerBtn());
    }

}