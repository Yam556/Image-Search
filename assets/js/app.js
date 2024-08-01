const ACCESS_KEY ="NTc0fLTP_1dUsdKv8KrBiEfIGlLO_QNLfIJaLcQHGcI";
const SECRET_KEY = "cOBB-XnPLg93_OaB6Fu21WEDfEK-fJCN5csRs8Oelmc";

const labels = ["Interior", "Canada", "collective", "table", "chair", "montreal", "coffee shop", "coffee machine", "cafe", "coffee", "glass", "Window"]

function popualteLabels(){
    const labelElements = labels.map(label => {
        return `<button class="label-btn">${label}</button>`;
    });
    document.querySelector('.labels-wrap').innerHTML = labelElements.join("");
    document.querySelectorAll('.label-btn').forEach(Button =>{
        Button.addEventListener('click', async (event) => {
            const query = event.target.textContent;
            await searchImages(query);
        })
    })
}
popualteLabels();

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await searchImages(query);
    

});

async function searchImages(query){
    const now = new Date();
    const expires = now.setTime(now.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = `query=${query};expires=${new Date(expires)}:path=/`;
    console.log({query});
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    console.log({url});

    const response = await fetch(url);
    const data = await response.json();
    console.log({data})
    const images = data.results;
    let imageElements = '';
    for(let image of images){
        const imageUrl = image.urls.regular;
        imageElements +=  `<img src="${imageUrl}" alt="">`;
        console.log({imageUrl});
    }
   document.querySelector('.images').innerHTML = imageElements;
}
(async() => {
    const cookie = document.cookie;
    const query = cookie.split("=")[1];
    console.log(query);
    await searchImages(query);
})();