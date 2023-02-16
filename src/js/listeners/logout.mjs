import { clearStorage } from "../localStorage/index.mjs";


export function logout(){
    const logoutBtn = document.querySelector("#logoutBtn");

    if(logoutBtn){
        logoutBtn.addEventListener("click", (event) => {
            clearStorage();
            window.location.replace("/");
        })
    }
}

