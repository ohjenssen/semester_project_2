import * as authenticate from "../../api/index.mjs";

export function setLoginFormListener(){
    
    const form = document.querySelector("#loginForm");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const userInfo = Object.fromEntries(formData.entries());

            authenticate.loginUser(userInfo);
        })
    }

}