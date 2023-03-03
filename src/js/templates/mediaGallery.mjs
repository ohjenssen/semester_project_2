/**
 * Function to be used in a loop. Adds an an image url to img src.
 * @param {string} url Image url
 * @returns Div element containg an image from the listing
 */
export function galleryImage(url){
    const galleryImage = document.createElement("div");
    galleryImage.className = "col-lg-3 col-md-4 col-6";

    galleryImage.innerHTML = `
                                    <a class="d-block mb-4 h-100">
                                        <img class="img-fluid img-thumbnail shadow" src="" alt="Images of the listing.">
                                    </a>
                                `;
    galleryImage.querySelector("img").src = url;
    return galleryImage;
}