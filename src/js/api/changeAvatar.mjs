import { api_urls } from "./constants.mjs";
import * as storage from "../localStorage/index.mjs";

export async function changeAvatar(formData){
    const changeAvatarUrl = `${api_urls.base}${api_urls.profile}${storage.getUserName()}/media`;
    
    const data = {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${storage.getAccessToken()}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(formData)
    };

    try {
        const response = await fetch(changeAvatarUrl, data);
        const json = await response.json();
        
        if(response.ok){
            const profile = JSON.parse(localStorage.getItem(("profileInfo")));
            profile.avatar = json.avatar;
            localStorage.setItem("profileInfo", JSON.stringify(profile));
            localStorage.setItem("avatar", JSON.stringify(json.avatar));
            location.reload();
        }

    } catch (error){

    }


}