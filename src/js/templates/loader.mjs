/**
 * Adds a spinner, primarily used in buttons, when clicked the loader is added until something happens.
 * @returns HTML element, a loader
 */
export function addLoader(){
    const loader = document.createElement("div");
    loader.className = "d-flex justify-content-center";
    loader.id = "loader";
    loader.innerHTML = `
                        <div class="spinner-border" role="status" >
                            <span class="visually-hidden">Loading...</span>
                        </div>
    `;
    return loader;
};