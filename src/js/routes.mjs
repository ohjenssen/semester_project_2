import * as listeners from "./listeners/index.mjs";

/**
 * Sets the correct listeners in teh right page.
 * @param {string} path Path name in url
 */
export function setRoute(path){
    switch(path){
        case "/pages/register/":
            listeners.setRegisterFormListener();
            break;

        case "/pages/login/":
            listeners.setLoginFormListener();
            break;

        case "/":
            listeners.setLandingPage();
            listeners.getListings();
            window.onscroll = function() {listeners.scrollFunction()};
            break;

        case "/pages/profilePage/":
            listeners.setProfilePage();
            listeners.changeAvatar();
            listeners.getListings();
            window.onscroll = function() {listeners.scrollFunction()};
            break;

        case "/pages/otherProfiles/":
            listeners.setProfilePage();
            listeners.getListings();
            break;

        case "/pages/browse/":
            listeners.getListings();
            window.onscroll = function() {listeners.scrollFunction()};
            break;

        case "/pages/listing/":
            listeners.getSingleListing();
            break;

        case "/pages/createListing/":
            listeners.createListing();
            break;

        case "/pages/editListing/":
            listeners.editListing();
            break;

        case "/pages/searchResults/":
            listeners.getListings();
            window.onscroll = function() {listeners.scrollFunction()};
    }

    listeners.checkLoginStatus();
    listeners.logout();
    listeners.getSearchResults();

}