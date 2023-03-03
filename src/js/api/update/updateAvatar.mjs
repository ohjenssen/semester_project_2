import { api_urls } from "../constants.mjs";
import * as storage from "../../localStorage/index.mjs";

/**
 * 
 * Function that updates the avatar of registered profile.
 * @param {object} formData Object containing a name and value to be sent.
 * @example
 * ```
 * const newAvatar = { avatar: "newImagelink.url" };
 * editAvatar(newAvatar);
 * ```
 */
export async function editAvatar(formData){
    console.log(formData);
    const updateAvatarUrl = `${api_urls.base}${api_urls.profile}${storage.getUserName()}/media`;
    
    const data = {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(formData)
    };

    try {
        const response = await fetch(updateAvatarUrl, data);
        const json = await response.json();
        
        if(response.ok){
            const profile = JSON.parse(localStorage.getItem(("profileInfo")));
            profile.avatar = json.avatar;
            localStorage.setItem("profileInfo", JSON.stringify(profile));
            localStorage.setItem("avatar", JSON.stringify(json.avatar));
            location.reload();
        } else {
            const errorTag = document.querySelector("#errorTag");
            errorTag.innerText = json.errors[0].message;
        }

    } catch (error){
        console.log(error);
    }


}