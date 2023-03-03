import * as api from "../../api/index.mjs";

/**
 * Selects the createListing form and adds an eventlistener.
 */
export function createListing(){
    const form = document.querySelector("#createListing");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const listingInfo = Object.fromEntries(formData.entries());


            const rawDate = `${listingInfo.date}-${listingInfo.time}`;
            const deadline = rawDate.replace(/(\d{4})-(\d{2})-(\d{2})-(\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:00.000Z'); // Formatting the time.
            const { date, time, ...data } = listingInfo; // destructuring and geting a new object with the correct names and values to be used in the api call.

            data.media = data.media.split(" "); // Splits the image urls allowing for more than one image in a listing
            data.tags = data.tags.split(" "); // Splits the tags allowing for more than one tag in a listing
            data.endsAt = deadline;

            if(data.media[0] === ""){
                data.media = "";
            };

            api.createListing(data);
        })
    }
}