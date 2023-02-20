const heroText = document.querySelector(".lead");
const heroButton = document.querySelector("#getStartedBtn");

export function loggedIn(){
    heroText.innerText = "Great to see you! Get started with browsing the latest listings or create your own.";
    heroButton.innerText = "Create Listing";
    heroButton.href = "/pages/createListing/";
}

export function notLoggedIn(){
    heroText.innerText = "Welcome to the Auction Ace, where bravery meets bidding. ‘Ace your next auction’ with us and join a community of bidders and sellers searching for unique items. Start bidding now!";
    heroButton.innerText = "Get started";
    heroButton.href = "/pages/register/";
}