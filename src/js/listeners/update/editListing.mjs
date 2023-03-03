import * as templates from "../../templates/index.mjs";
import * as api from "../../api/index.mjs";

/**
 * Prefills the form with listing info, and adds an eventlistener to the form
 * that calls on the edit api.
 */
export async function editListing(){
    const listing = await api.getSingleListing();
    templates.preFillForm(listing);
    const form = document.querySelector("#editListing");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const editInfo = Object.fromEntries(formData.entries());
            
            editInfo.media = editInfo.media.split(" ");
            editInfo.tags = editInfo.tags.split(" ");

            if(editInfo.media[0] === ""){
                editInfo.media = "";
            };
            api.editListing(editInfo);
        })
    }
}