import * as api from "../../api/index.mjs";

/**
 * Adds an eventlistener to the avatarform and calls upon the api when submitted.
 */
export function changeAvatar(){
    const form = document.querySelector("#changeAvatarForm");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const avatarUrl = Object.fromEntries(formData.entries());

            api.editAvatar(avatarUrl);
        })
    }
}