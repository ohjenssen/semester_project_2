import * as authenticate from "../api/index.mjs";

export function setRegisterFormListener(){

    const form = document.querySelector("#registerForm");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userInfo = Object.fromEntries(formData.entries());
            
            authenticate.registerUser(userInfo);
        })
    }
}