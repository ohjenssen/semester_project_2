import * as api from "../api/index.mjs";

/**
 * Function that creates a modal for each listing on the uuser profile.
 * Also adds an eventlistener that calls on the delete api, deleting the post.
 * @param {number} id Listing id to be used in the modal id
 * @returns Div element that gets appended to the body.
 */
export function deleteModal(id){
    const modal = document.createElement("div");
    modal.className = "modal text-dark-blue";
    modal.tabIndex = "-1";
    modal.id = `deleteModal${id}`;

    modal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete listing?</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Once you click delete, the listing is deleted for good</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button id="deleteBtn" type="button" class="btn btn-danger deleteBtn text-dark">Delete</button>
                            </div>
                        </div>
                    </div>
    `;

    const deleteBtns = modal.querySelector("#deleteBtn");
    deleteBtns.addEventListener("click", () => {
        api.deleteListing(id);
    })

    return modal;
}
