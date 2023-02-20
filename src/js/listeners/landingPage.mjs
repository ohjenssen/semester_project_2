import * as landingPage from "../templates/index.mjs";
import * as localStorage from "../localStorage/index.mjs";

export function setLandingPage(){

    if(localStorage.getAccessToken()){
        landingPage.loggedIn();

    } else if(!localStorage.getAccessToken()){
        landingPage.notLoggedIn();
    }

}
