import * as api from "../../api/index.mjs";
export function createListing(){
    const form = document.querySelector("#createListing");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const listingInfo = Object.fromEntries(formData.entries());

            const rawDate = `${listingInfo.date}-${listingInfo.time}`;
            const deadline = rawDate.replace(/(\d{4})-(\d{2})-(\d{2})-(\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:00.000Z');
            const { date, time, ...data } = listingInfo;

            const tagsArr = data.tags.split(" ");
            let mediaArr = data.media.split(" ");
            if(mediaArr[0] === ""){
                mediaArr = "";
            };

            data.endsAt = deadline;
            data.media = mediaArr;
            data.tags = tagsArr;
            api.createListing(data);

            
        })
    }
}