import * as api from "../api/index.mjs";

export async function preFillForm(){
    const listing = await api.getSingleListing();
    const editListingForm = document.querySelector("#editListing");
    editListingForm.querySelector("#title").value = listing.title;
    editListingForm.querySelector("#description").value = listing.description;
    editListingForm.querySelector("#tags").value = listing.tags.join(" ");
    editListingForm.querySelector("#imageInput").value = listing.media;
}