import * as templates from "../../templates/index.mjs";
import * as api from "../../api/index.mjs";

export async function editListing(){
    templates.preFillForm();
    const form = document.querySelector("#editListing");

    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const editInfo = Object.fromEntries(formData.entries());
            editInfo.tags = editInfo.tags.split(" ");
            editInfo.media = editInfo.media.split(" ");

            api.editListing(editInfo);
        })
    }
}