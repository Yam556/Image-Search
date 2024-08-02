
 import popualteLabels from "./labels.js";
 import searchImages from "./searchImages.js";
 import { getCookie } from "./cookie.js";


popualteLabels();

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await searchImages(query);
    

});

(async() => {
    const query = getCookie();
    await searchImages(query);
})();