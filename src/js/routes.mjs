import * as listeners from "./handlers/index.mjs";

export function setRoute(path){
    switch(path){
        case "/pages/register/":
            listeners.setRegisterFormListener();
            break;
    }

}