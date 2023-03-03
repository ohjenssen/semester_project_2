import * as landingPage from "../../templates/index.mjs";
import * as localStorage from "../../localStorage/index.mjs";

/**
 * Determines the content rendered on the landing page.
 * If the acces token is present in local storage, it renders 'A' type of content.
 * If not then 'B' type of content.
 */
export function setLandingPage(){

    if(localStorage.getAccessToken()){
        landingPage.loggedIn();

    } else if(!localStorage.getAccessToken()){
        landingPage.notLoggedIn();
    }

}