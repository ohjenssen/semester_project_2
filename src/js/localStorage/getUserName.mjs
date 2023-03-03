/**
 * 
 * @returns {string} String containing the users prfile name
 */
export function getUserName(){
    const profile = JSON.parse(localStorage.getItem(("profileInfo")));
    return profile.name;
};