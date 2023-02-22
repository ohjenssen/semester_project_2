export function userProfilePosts(listings){
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
                                        <a href="#" class="btn btn-light-blue shadow mt-2">View</a>
                                        <a href="#" class="btn btn-orange shadow mt-2">Edit</a>
                                </div>
                                
    `;

    if(listings < 1){
        divContainer.innerText = "No listings";
        divContainer.className = "text-center fs-2";
    } else {
        listings.map((listing, index) => {
            divContainer.querySelector(".card-title").innerText = listing.title;
            divContainer.querySelector("img").src = listing.media[0];
            const d = new Date(listing.endsAt);
            divContainer.querySelector("#deadline").innerText = d.toLocaleString();
            divContainer.querySelector("#bids").innerText = listing._count.bids;
        })
    }
    return divContainer;

}