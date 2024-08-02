
 import popualteLabels from "./labels.js";
 import searchImages from "./searchImages.js";
 import { getQuery } from "./localStorage.js";


popualteLabels();

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await searchImages(query);
    

});

(async() => {
    const query = getQuery();
    await searchImages(query);
})();

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });