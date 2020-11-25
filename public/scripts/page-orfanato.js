const options= {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



// create and add marker


L.marker([lat, lng], {icon}).addTo(map)


// galeria de imaagens

function selectimage(event){
    // console.log("cliquei no botão")
    const button = event.currentTarget

    // remover todas as classes actives
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove(".active")

    }
    // selecionar imagem clicada para
    const image = button.children[0]
    const imageContainer = document.querySelector(".orfanato-detalhes > img")
    // atualizar o container de imagem
    
    imageContainer.src = image.src

    // adicionar a classe active para este botao
    button.classList.add('active')
}
