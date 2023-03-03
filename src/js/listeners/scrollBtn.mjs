import * as localStorage from "../localStorage/index.mjs";

// Assigning accesT outside the function so it doesnt get called everytime the user scrolls
const accessToken = localStorage.getAccessToken();

/**
 * Selects a button that changes text and href based on auth.
 * If screen width is less than 480px, the button is not present as it gets in the way.
 */
export function scrollFunction() {
    let scrollBtn = document.getElementById("scrollBtn");

            if(accessToken){
                scrollBtn.href = "/pages/createListing";
                scrollBtn.innerText = "Create listing";
            } else {
                scrollBtn.href = "/pages/register/";
                scrollBtn.innertext = "Create User";
            }

    const screenWidth = screen.width;

    if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) && screenWidth > 480) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}