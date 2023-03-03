/**
 * Parses and returns the accesstoken.
 * @returns {string} String containing the accesstoken.
 */
export function getAccessToken(){
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    return accessToken;
};