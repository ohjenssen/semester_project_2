import * as templates from "../templates/index.mjs";
import * as api from "../api/index.mjs";

export async function setProfilePage(){
    const profile = await api.getUserProfile();

    if(!profile.avatar){
        profile.avatar = "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    };

    templates.renderProfile(profile.name, profile.email, profile.avatar, profile.credits, profile.wins.length);
}