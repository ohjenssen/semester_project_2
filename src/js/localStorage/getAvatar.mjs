/**
 * Gets the image url from localstorage
 * @returns {string} String containing the url for the image
 */
export function getAvatar(){
    const avatar = JSON.parse(localStorage.getItem("avatar"));
    return avatar;
}