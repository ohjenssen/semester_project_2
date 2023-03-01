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