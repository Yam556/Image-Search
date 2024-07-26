const ACCESS_KEY ="NTc0fLTP_1dUsdKv8KrBiEfIGlLO_QNLfIJaLcQHGcI";
const SECRET_KEY = "cOBB-XnPLg93_OaB6Fu21WEDfEK-fJCN5csRs8Oelmc";

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
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

})
