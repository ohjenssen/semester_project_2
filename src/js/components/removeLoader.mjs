/**
 * Function removing the loader spinner found at the top of some pages or on the buttons.
 */
export function removeLoader(){
    const loader = document.querySelector("#loader");
    if(loader){
        loader.remove();
    }
}