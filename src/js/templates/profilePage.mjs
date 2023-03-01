export function renderProfile(name, email, avatar, credits, wins){
    const nameContainer = document.querySelector("#profileName");
    const avatarContainer = document.querySelector("#avatarImg");
    const emailContainer = document.querySelector("#email");
    const creditsContainer = document.querySelector("#currentCredits");
    const winsContainer = document.querySelector("#currentWins");

    nameContainer.innerText = name;
    emailContainer.innerText = email;
    avatarContainer.src = avatar;
    creditsContainer.innerText = credits;
    winsContainer.innerText = wins;
}