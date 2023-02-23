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
                                <button type="button" id="delete" class="btn btn-danger text-dark">Delete</button>
                            </div>
                        </div>
                    </div>
    `;

    return modal;
}
