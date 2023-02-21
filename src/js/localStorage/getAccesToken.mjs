export function getAccessToken(){
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    return accessToken;
};