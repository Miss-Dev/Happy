const map = L.map('mapid').setView([-19.0130404,-57.6564096], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    
})

let marker;

map.on('click', (event) => {
    // console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon from
    marker && map.removeLayer(marker);
    // add icon tileLayer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

//adicionar o campo de fotos

function addPhotoField(){
    // pegar o container de fotos #images
    const container =  document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se sin, não adicionar ao container de imagens

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
    
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// selecionar o sim ou não

function toggleSelect(event){
    
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })


    // colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    // pegar o botão clicado
    
    const input = document.querySelector('[name = "open_on_weekend"]')
    // verificar se é sim ou não

    input.value = button.dataset.value

    // atualizar o meu input hidden com o valor selecionado

}
/*
function validate(event){
    if(event.preventDefault()){
        alert("Selecione um ponto no mapa!")
    }
}*/





