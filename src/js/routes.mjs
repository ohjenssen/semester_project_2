import * as listeners from "./listeners/index.mjs";

export function setRoute(path){
    switch(path){
        case "/pages/register/":
            listeners.setRegisterFormListener();
            break;

        case "/pages/login/":
            listeners.setLoginFormListener();
            break;
    }

    listeners.checkLoginStatus();

}