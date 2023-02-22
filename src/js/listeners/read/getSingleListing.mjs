import * as api from "../../api/index.mjs";
import * as templates from "../../templates/index.mjs";

export async function getSingleListing(){
    const div = document.querySelector("#listings");
    const listing = await api.getSingleListing();
    console.log(listing)
    
    
    div.append(templates.singeListing(listing));
    
}