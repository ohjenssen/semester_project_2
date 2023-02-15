import { getAccessToken } from "../localStorage/index.mjs";
import { loginBtn, registerBtn, userProfileAvatar,  logoutBtn } from "../templates/index.mjs";

export function checkLoginStatus(){
    const container = document.querySelector("#authContainer");

    if(getAccessToken()){
        container.append(userProfileAvatar());
        container.append(logoutBtn());
    } else if(!getAccessToken()){
        container.append(loginBtn())
        container.append(registerBtn());
    }

}