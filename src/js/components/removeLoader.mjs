export function removeLoader(){
    const loader = document.querySelector("#loader");
    if(loader){
        loader.remove();
    }
}