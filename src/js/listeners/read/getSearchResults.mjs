export function getSearchResults(){
    const form = document.querySelector("#searchForm");
    const searchInput = document.querySelector("#searchInput");
    if(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            window.location.href = "/pages/searchResults/?searchWord=" + searchInput.value;
        })
    }
    
}