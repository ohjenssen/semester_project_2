import { clearStorage } from "../../localStorage/index.mjs";

/**
 * Function that checks if the logout button exists.
 * If it does then it adds an eventlistener that clears teh localstorage (logs out) and redirects the user to the index page.
 */
export function logout(){
    const logoutBtn = document.querySelector("#logoutBtn");

    if(logoutBtn){
        logoutBtn.addEventListener("click", () => {
            clearStorage();
            window.location.replace("/");
        })
    }
}
