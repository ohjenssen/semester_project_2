import * as storage from "../localStorage/index.mjs";

export function loginBtn(){
    const loginBtn = document.createElement("a");
    loginBtn.className = "btn btn-outline-light me-2";
    loginBtn.href = "/pages/login/";
    loginBtn.innerText = "LOGIN";

    return loginBtn;
}

export function registerBtn(){

    const registerBtn = document.createElement("a");
    registerBtn.className = "btn btn-orange";
    registerBtn.href = "/pages/register/";
    registerBtn.innerText = "REGISTER";

    return registerBtn;
}

export function logoutBtn(){
    const logoutBtn = document.createElement("a");
    logoutBtn.className = "btn btn-outline-light me-2";
    logoutBtn.href = "/";
    logoutBtn.innerText = "LOGOUT";
    logoutBtn.id = "logoutBtn";

    return logoutBtn;
}

export function userProfileAvatar(){
    const aTag = document.createElement("a");
    aTag.className = "me-2";
    aTag.innerHTML = "<img>";
    aTag.href = `/pages/profilePage/?name=${storage.getUserName()}`;
    aTag.id = "profileAvatar";

    aTag.querySelector("img").alt = "profile image";
    aTag.querySelector("img").className = "img-fluid rounded-circle border border-dark border-3";
    aTag.querySelector("img").style = "width: 60px;";

    if(!storage.getAvatar()){
        aTag.querySelector("img").src = "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    } else {
        aTag.querySelector("img").src = storage.getAvatar();
    }
    
    return aTag;
}