import { getAvatar } from "../localStorage/getAvatar.mjs";

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
    aTag.href = "";
    aTag.id = "profileAvatar";

    aTag.querySelector("img").alt = "profile image";
    aTag.querySelector("img").className = "img-fluid rounded-circle border border-dark border-3";
    aTag.querySelector("img").style = "width: 60px;";

    if(JSON.parse(getAvatar()) === ""){
        aTag.querySelector("img").src = "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg";
    } else {
        aTag.querySelector("img").src = JSON.parse(getAvatar());
    }
    
    return aTag;
}