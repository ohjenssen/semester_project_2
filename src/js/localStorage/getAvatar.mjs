export function getAvatar(){
    const avatar = localStorage.getItem("avatar");
    return avatar;
}