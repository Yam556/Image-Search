import searchImages from "./searchImages.js";
const labels = ["Interior", "Canada", "collective", "table", "chair", "montreal", "coffee shop", "coffee machine", "cafe", "coffee", "glass", "Window"]

export default function popualteLabels(){
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