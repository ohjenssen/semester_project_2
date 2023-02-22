import * as localStorage from "../localStorage/index.mjs";

export function scrollFunction() {
    let scrollBtn = document.getElementById("scrollBtn");

            if(localStorage.getAccessToken()){
                scrollBtn.href = "/pages/createListing";
                scrollBtn.innerText = "Create listing";
            } else {
                scrollBtn.href = "/pages/register/";
                scrollBtn.innertext = "Create User";
            }

    const screenWidth = screen.width;

    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && screenWidth > 480) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}