import * as listeners from "./listeners/index.mjs";

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
            break;

        case "/pages/browse/":
            listeners.getListings();
            break;
    }

    listeners.checkLoginStatus();
    listeners.logout();

}