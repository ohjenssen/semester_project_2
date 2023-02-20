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
            window.onscroll = function() {listeners.scrollFunction()};
            break;

        case "/pages/profilePage/":
            listeners.setProfilePage();
            break;
    }

    listeners.checkLoginStatus();
    listeners.logout();

}