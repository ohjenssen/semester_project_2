import { deleteModal } from "./modal.mjs";

export function userProfilePosts(listing){
    
    const divContainer = document.createElement("div");
    divContainer.className = "card bg-dark-blue text-light-blue shadow mt-4 card-listing";

    divContainer.innerHTML = `
                                    <div class="image-container bg-light-blue rounded-top">
                                        <img src="" class="card-img-top mx-auto d-block card-image" alt="Listing image">
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
                                        <button type="button" class="btn btn-danger text-dark-blue shadow mt-2 float-end" data-bs-toggle="modal" data-bs-target="#deleteModal${listing.id}">Delete</a>
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
    divContainer.querySelector("#deadline").innerText = d.toLocaleString();
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
                                                <img src="" id="listingImage" class="card-image d-block mx-auto img-fluid rounded-3" alt="Bootstrap Themes" loading="lazy" width="700" height="500">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                                        <div class="">
                                            <form class="is-valid rounded-3 mx-auto" id="bidForm">
                                                <div class="mb-5">
                                                    <h3>Bid</h3>
                                                    <div class="d-flex input-container">
                                                        <input type="text" class="form-control" id="bidInput" placeholder="Enter bid" name="bidInput" required>
                                                    </div>
                                                    <div class="d-grid gap-2 mt-2">
                                                        <button type="submit" id="getStartedBtn" class="btn btn-orange btn-lg px-4 shadow">BID</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Bids</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">An item</li>
                                                <li class="list-group-item">A second item</li>
                                                <li class="list-group-item">A third item</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;

    divContainer.querySelector("h1").innerText = listing.title;

    if(listing.media[0]){
        divContainer.querySelector("#listingImage").src = listing.media[0];
    } else {
        divContainer.querySelector("#listingImage").src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    };

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
    // divContainer.querySelector("#bids").innerText = listing._count.bids;
    // divContainer.querySelector("#view").href = `/pages/listing/?id=${listing.id}`; 

    return divContainer;
}

export function noListings(){
    const divContainer = document.createElement("h1");
    divContainer.className = "card bg-dark-blue text-light-blue shadow mt-4 card-listing p-3 text-center";

    divContainer.innerText = "No listings yet!";
    return divContainer;
}

// "#deleteModalb73aef1e-56c3-41fd-87d2-ea2e1be550ae"
// "#deleteModalb73aef1e-56c3-41fd-87d2-ea2e1be550ae"