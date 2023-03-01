import * as authenticate from "../../api/index.mjs";

export function setRegisterFormListener(){

    const form = document.querySelector("#registerForm");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const userInfo = Object.fromEntries(formData.entries());
            
            authenticate.registerUser(userInfo);
        })
    }
}