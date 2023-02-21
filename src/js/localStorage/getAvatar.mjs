export function getAvatar(){
    const avatar = JSON.parse(localStorage.getItem("avatar"));
    return avatar;
}