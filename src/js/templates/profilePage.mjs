export function renderProfile(name, email, avatar, credits, wins){
    const nameContainer = document.querySelector("#profileName");
    const avatarContainer = document.querySelector("#avatarImg");
    const emailContainer = document.querySelector("#email");
    const creditsContainer = document.querySelector("#currentCredits");
    const winsContainer = document.querySelector("#currentWins");

    const winsModal = document.querySelector("#winsModal");
    const modalBody = winsModal.querySelector(".modal-body");
    const winLink = document.createElement("a");
    winLink.className = "text-dark-blue text-decoration-none";

    const noWins = document.createElement("h3");


    if(wins.length > 0){
        for (let i = 0; i < wins.length; i++){
            winLink.innerText = `Win #${i + 1}`;
            winLink.href = `/pages/listing/?id=${wins[i]}`;
            modalBody.append(winLink);
        }
    } else if(wins.length < 1) {
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