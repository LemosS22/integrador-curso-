// Agregar TARJETA


var parrafo = document.createElement('p');
var texto = document.createTextNode('Hola Mundo!');
parrafo.appendChild(texto);

// <img src="./img/img-place-holder.png" alt="Texto Alternativo 2">
var imagen = document.createElement('img');
imagen.setAttribute('src', './img/img-place-holder.png');
imagen.setAttribute('alt', 'Texto Alternativo 2');

// <div class="card rojo"></div>
var card = document.createElement('div');
card.classList.add('card')
card.classList.add('azul')

card.appendChild(imagen);
card.appendChild(parrafo);
document.getElementById('container').appendChild(card);

/////////////////////////////////////////////////////////////////////////////////

function cambiarFondo(event) {
    card.classList.add('fondo-rojo');
}

const cambiarFondo2 = (event) => {
    card.classList.add('fondo-rojo');
}

var boton = document.querySelector('button')
boton.addEventListener('click', cambiarFondo2)


boton.addEventListener("click", function (event) {
    console.log("Click sobre el botón");
});

boton.addEventListener("mouseup", function () {
    console.log("MouseUp sobre el botón");
});

boton.addEventListener("mousedown", function () {
    console.log("MouseDown sobre el botón");
});

document.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON")
        console.log("Aprete" + event.target.textContent);
});

var modal = document.getElementById('myModal');
var cardImgList = document.getElementsByClassName("card-img");

var cardImgList = document.getElementsByClassName("card-img");
for (let index = 0; index < cardImgList.length; index++) {
    const cardImg = cardImgList[index];
    cardImg.addEventListener("click", showModal);
    @@ -28, 4 + 28, 55 @@window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Agregar like

    function like(event) {
        event.target.classList.toggle('like');
    }

    var icono = document.querySelector('.fa-heart');
    icono.addEventListener("click", like);
    // icono.onclick =  like;


    // Agregar Tarjeta
    function agregarCard() {
        // cotenedor de cards
        var cardContainer = document.getElementById('card-container');

        var card = document.createElement('div');
        card.classList.add('card')

        var imagen = document.createElement('img');
        imagen.classList.add('card-img');
        imagen.setAttribute('src', './img/cat.png');
        imagen.setAttribute('alt', 'palceholder');
        imagen.addEventListener("click", showModal);
        card.appendChild(imagen);


        var icono = document.createElement('i');
        icono.classList.add('fa-solid', 'fa-heart');
        icono.onclick = like;

        var actions = document.createElement('div');
        actions.classList.add('card-actions');

        actions.appendChild(icono);
        card.appendChild(actions);

        cardContainer.appendChild(card);
    }

    // Agregar favoritos
    function verFavoritos() {
        console.log("verFavoritos");