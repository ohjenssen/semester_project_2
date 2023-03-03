/**
 * Redirects the user to the search results page and adds the search 
 * word to the url parameter.
 */
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