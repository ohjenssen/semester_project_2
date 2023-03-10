import { deleteModal } from "./modal.mjs";
import { galleryImage } from "./mediaGallery.mjs";
import * as storage from "../localStorage/index.mjs";
import * as api from "../api/index.mjs";

const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric"
};

export function profileAvatar(listing){
    const img = document.createElement("img");
    img.className = "img-fluid rounded-circle border border-dark border-1 m-2 shadow";
    img.alt = "profile image";
    img.style = "width: 60px;";
    if(!listing.seller.avatar){
        img.src = "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    } else {
       img.src = listing.seller.avatar;
    }

    return img;
}

export function browseListings(listing){

    const divContainer = document.createElement("div");
    divContainer.className = "card bg-dark-blue text-light-blue shadow mt-2 m-1 p-0 listings";
    divContainer.innerHTML = `      
                                    <div class="image-container rounded-top mx-auto">
                                        <img src="" class="card-img-top d-block" alt="Listing image">
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">Card title</h5>
                                        <div class="d-flex justify-content-between flex-wrap mb-1">
                                            <div class="me-3 mt-2">
                                                <p class="card-text mb-0">Deadline</p>
                                                <p id="deadline" class="card-text fs-5"></p>
                                            </div>
                                            <div class="mt-2">
                                                <p class="card-text mb-0">Bids</p>
                                                <p id="bids" class="card-text fs-5"></p>
                                            </div>
                                        </div>
                                        <div class="mt-auto d-flex flex-column">
                                            <a id="view" class="btn btn-light-blue">View</a>
                                        </div>
                                    </div>
                                `;


    divContainer.querySelector(".card-title").innerText = listing.title;

    if(listing.media[0]){
        divContainer.querySelector("img").src = listing.media[0];
    } else {
        divContainer.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    };
    
    const d = new Date(listing.endsAt);
    divContainer.querySelector("#deadline").innerText = `${d.toLocaleDateString()} ${d.toLocaleTimeString("en-US", options)}`;
    divContainer.querySelector("#bids").innerText = listing._count.bids;
    divContainer.querySelector("#view").href = `/pages/listing/?id=${listing.id}`;

    return divContainer;
}

export function userProfilePosts(listing){
    
    const divContainer = document.createElement("div");
    divContainer.className = "card bg-dark-blue text-light-blue shadow mt-4 listings mx-auto";

    divContainer.innerHTML = `
                                    <div class="image-container bg-light-blue rounded-top mx-auto">
                                        <img src="" class="card-img-top d-block" alt="Listing image">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <div class="d-flex justify-content-between flex-wrap mb-1">
                                            <div class="me-3 mt-2">
                                                <p class="card-text mb-0">Deadline</p>
                                                <p id="deadline" class="card-text fs-5"></p>
                                            </div>
                                            <div class="mt-2">
                                                <p class="card-text mb-0">Bids</p>
                                                <p id="bids" class="card-text fs-5"></p>
                                            </div>
                                        </div>
                                        <div>
                                        <a id="view" class="btn btn-light-blue shadow mt-2">View</a>
                                        <a id="edit" href="#" class="btn btn-orange shadow mt-2">Edit</a>
                                        <button type="button" class="btn btn-danger text-dark-blue shadow mt-2 float-end" data-bs-toggle="modal" data-bs-target="#deleteModal${listing.id}">Delete</button>
                                        </div>
                                    </div>
                                    
                                `;


    divContainer.querySelector(".card-title").innerText = listing.title;

    if(listing.media[0]){
        divContainer.querySelector("img").src = listing.media[0];
    } else {
        divContainer.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    };
    
    const d = new Date(listing.endsAt);
    divContainer.querySelector("#deadline").innerText = `${d.toLocaleDateString()} ${d.toLocaleTimeString("en-US", options)}`;
    divContainer.querySelector("#bids").innerText = listing._count.bids;
    divContainer.querySelector("#view").href = `/pages/listing/?id=${listing.id}`;
    divContainer.querySelector("#edit").href = `/pages/editListing/?id=${listing.id}`;

    divContainer.append(deleteModal(listing.id));

    return divContainer;
}

export function singeListing(listing){
    const divContainer = document.createElement("div");
    divContainer.className = "text-dark-blue mt-4";

    divContainer.innerHTML = `
                                <div class="row flex-lg-row align-items-start justify-content-center g-5 py-5">
                                    <div class="col col-sm-10 col-md-8 col-lg-6">
                                        <div class="p-3 mb-2">
                                            <h1 class="display-5 fw-bold lh-1 mb-3 text-center"></h1>
                                            <div class="image-container border border-secondary shadow">
                                                <img src="" id="listingImage" class="card-image d-block mx-auto img-fluid rounded-3 shadow" alt="Bootstrap Themes" loading="lazy" width="700" height="500">
                                            </div>
                                            <div class="mt-4">
                                                <div class="mt-2">
                                                    <p class="mb-0 text-decoration-underline">Description</p>
                                                    <p id="description" class="lead mt-0"></p>
                                                </div>
                                                <div class="mt-2">
                                                    <p class="mb-0 text-decoration-underline">Ends at</p>
                                                    <p id="deadline" class="lead mt-0"></p>
                                                </div>
                                                <div class="mt-2">
                                                    <p class="mb-0 text-decoration-underline">Tags</p>
                                                    <p id="tags" class="lead"></p>
                                                </div>
                                                <div class="mt-2">
                                                    <p class="mb-0 text-decoration-underline">Seller</p>
                                                    <div id="sellerContainer">
                                                        <button type="button" id="seller" class="btn text-dark-blue mt-2 p-0" data-bs-toggle="modal" data-bs-target="#authWarning"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                                        <div id="form-container">
                                            <form id="bidForm" class="is-valid rounded-3 mx-auto"><div class="mb-5">
                                                <label for="amount" class="form-label fs-3">Bid</label>
                                                <div class="d-flex input-container">
                                                    <input type="number" class="form-control" id="amount" placeholder="Enter bid" name="amount" required>
                                                    </div>
                                                    <div class="d-grid gap-2 mt-2">
                                                    <button type="submit" id="bidButton" class="btn btn-orange btn-lg px-4 shadow">BID</button>
                                                    <button type="button" id="bidModalButton" data-bs-toggle="modal" data-bs-target="#authWarning" class="btn btn-orange btn-lg px-4 shadow">BID</button>
                                                    <p class="mt-3" id="errorTag"></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card shadow">
                                            <div class="card-header">
                                                <h5>Bids</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                            </ul>
                                        </div>
                                        <div class="container mt-4">
                                            <h1 class="fw-light text-center text-lg-start mb-0">Media Gallery</h1>
                                            <hr class="mt-2 mb-5">
                                            <div id="galleryContainer" class="row text-center text-lg-start">

                                            </div>
                                        </div>
                                    </div>
                                </div>`;

    divContainer.querySelector("h1").innerText = listing.title;

    if(listing.media[0]){
        divContainer.querySelector("#listingImage").src = listing.media[0];
    } else {
        divContainer.querySelector("#listingImage").src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    };

    const modalContainer = document.querySelector(".modalContainer");

    for (let i = 0; i < listing.media.length; i++){
        const galleryImg = galleryImage(listing.media[i]);
        divContainer.querySelector("#galleryContainer").append(galleryImg);
        galleryImg.addEventListener("click", (event) => {
            console.log(event.target.src);
            modalContainer.innerHTML = `<div class="galleryModal">
                                            <div class="gm">
                                                <img src="${event.target.src}" class="modalImage">
                                            <div>
                                        </div>`;

            const galleryModal = document.querySelector(".galleryModal");
            galleryModal.style.display = "flex";

            function exitModal(){
                galleryModal.style.display = "none";
                modalContainer.innerHTML = "";
            }
                    
            galleryModal.addEventListener("click", exitModal);
        })
    }

    if(listing.description){
        divContainer.querySelector("#description").innerText = listing.description;
    } else {
        divContainer.querySelector("#description").innerText = "No description available";
    }
    const d = new Date(listing.endsAt);
    divContainer.querySelector("#deadline").innerText = d.toLocaleString();

    if(listing.tags[0] === ""){
        divContainer.querySelector("#tags").innerText = "No tags";
    } else {
        divContainer.querySelector("#tags").innerText = listing.tags;
    }

    const sellerContainer = divContainer.querySelector("#sellerContainer");
    const bidButton = divContainer.querySelector("#bidButton");
    const bidModalButton = divContainer.querySelector("#bidModalButton");

    if(storage.getAccessToken()){
        const profileLink = document.createElement("a");
        profileLink.className = "lead text-dark-blue text-decoration-none";
        profileLink.id = "seller";
        profileLink.href = `/pages/otherProfiles/?name=${listing.seller.name}`;
        profileLink.innerText = listing.seller.name;
        profileLink.append(profileAvatar(listing));
        sellerContainer.append(profileLink);
        bidButton.hidden = false;
        bidModalButton.hidden = true;
    } else {
        divContainer.querySelector("#seller").innerText = listing.seller.name;
        divContainer.querySelector("#seller").append(profileAvatar(listing));
        bidButton.hidden = true;
        bidModalButton.hidden = false;
    }


    const bidsContainer = divContainer.querySelector(".list-group");
    const li = document.createElement("li");
    li.className = "list-group-item";
    
    if(listing.bids.length > 0){
        for (let i = 0; i < listing.bids.length; i++){
            const li = document.createElement("li");
            li.className = "list-group-item";

            li.innerText = `Name: ${listing.bids[i].bidderName} Bid: ${listing.bids[i].amount}`;
            bidsContainer.append(li);
        }
    } else {
        const message = document.createElement("h3");
        message.className = "text-center m-3"
        message.innerText = "No bids yet!";

        bidsContainer.append(message);
    } 

    const form = divContainer.querySelector("#bidForm");
    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const bidAmount = Object.fromEntries(formData.entries());
            bidAmount.amount = parseInt(bidAmount.amount);
            api.createBid(bidAmount);
        })
    }
    return divContainer;
}

export function noListings(){
    const divContainer = document.createElement("h1");
    divContainer.className = "card bg-dark-blue text-light-blue shadow mt-4 card-listing p-3 text-center";

    divContainer.innerText = "No listings yet!";
    return divContainer;
}