/**
 * Sets innertext of HTML elements
 * @param {string} name 
 * @param {string} email 
 * @param {string} avatar 
 * @param {number} credits 
 * @param {array} wins 
 * 
 * @example
 * ```
 * const name = "John";
 * const email = "john@stud.noroff.no";
 * const avatar = "imageurl.com";
 * const credits = 1000;
 * const wins = ["122445eb-23t3e-2r1e2"];
 * renderProfile(name, email, avatar, credits, wins)
 * ```
 */
export function renderProfile(name, email, avatar, credits, wins){
    console.log(name);
    console.log(email);
    console.log(avatar);
    console.log(credits);
    console.log(wins);
    const nameContainer = document.querySelector("#profileName");
    const avatarContainer = document.querySelector("#avatarImg");
    const emailContainer = document.querySelector("#email");
    const creditsContainer = document.querySelector("#currentCredits");
    const winsContainer = document.querySelector("#currentWins");

    const winsModal = document.querySelector("#winsModal");
    const modalBody = winsModal.querySelector(".modal-body");
    
    if(wins.length > 0){
        for (let i = 0; i < wins.length; i++){
            const winLink = document.createElement("a");
            winLink.className = "text-dark-blue";
            winLink.innerText = `Win #${i + 1}`;
            winLink.href = `/pages/listing/?id=${wins[i]}`;
            modalBody.append(winLink);
        }
    } else if(wins.length < 1) {
        const noWins = document.createElement("h3");
        noWins.innerText = "No wins yet!";
        noWins.className = "text-center";
        modalBody.append(noWins);
    }
    
    nameContainer.innerText = name;
    emailContainer.innerText = email;
    avatarContainer.src = avatar;
    creditsContainer.innerText = credits;
    winsContainer.innerText = wins.length;
}