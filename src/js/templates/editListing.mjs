/**
 * Fills the form with information from the relevant listing.
 * @param {object} listing Object containing names and values from the listing.
 * @example
 * ```
 * const listingObj = { title: "Apple", description: "A delicious apple!", media: ["appleImage.url"], tags: ["art", "apple"] };
 * preFillForm(listingObj);
 * ```
 */
export async function preFillForm(listing){
    const editListingForm = document.querySelector("#editListing");
    editListingForm.querySelector("#title").value = listing.title;
    editListingForm.querySelector("#description").value = listing.description;
    editListingForm.querySelector("#tags").value = listing.tags.join(" ");
    editListingForm.querySelector("#imageInput").value = listing.media.join(" ");
}