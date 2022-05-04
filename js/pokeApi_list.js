
var offset = 1; //de 1 a 9 pokemones apareceran por transaccion
var limit = 9;

var card = 1; //para repetir los id en las cards del 1-9

var nextbutton = document.getElementById('nextbutton');
var previousbutton = document.getElementById('previousbutton');

nextbutton.addEventListener('click', next, true);


//Sorry tuve problemas para hacer la paginacion de pokemones.
function next() {
  offset += 1;
  limit += 1;

  for (var i = offset; i <= limit; i++) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(respuesta => respuesta.json())
      .then(pokemon => {
        let element = document.getElementById('wrapper') //la card con el id
        element.innerHTML =
          `<div class="card_list" id='pokemon_${card}'>
            <img src='${pokemon.sprites.front_default}'>
            <p> Pokedex No. ${pokemon.id}<p>
            <p> Name: ${pokemon.name}<p>
            <p> Height: ${pokemon.height}<p>
            <p> Type: ${pokemon.types[0].type.name}<p>       
            <p> Points of experience: ${pokemon.base_experience}<p>
            <p> Weight: ${pokemon.weight}<p></div>`;
        card++;
      })
      .catch(err => notfound())

  }
}//next()

//fetch para hacer consulta de los primeros 9 elementos
for (var i = offset; i <= limit; i++) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(respuesta => respuesta.json())
    .then(pokemon => {
      let element = document.getElementById(`pokemon_${card}`)
      element.innerHTML =
        `<img src='${pokemon.sprites.front_default}'>
    <p> Pokedex No. ${pokemon.id}<p>
    <p> Name: ${pokemon.name}<p>
    <p> Height: ${pokemon.height}<p>
    <p> Type: ${pokemon.types[0].type.name}<p>       
    <p> Points of experience: ${pokemon.base_experience}<p>
    <p> Weight: ${pokemon.weight}<p>`; //*types[0]* forma en que accedi al json especifico para el tipo
      card++;
    })
    .catch(err => notfound())

}

function notfound() {//->ejecutaremos una imagen con advertencia

  let element = document.getElementById('pokemon')
  element.innerHTML = `
      <img class="imgnotfound" src='img/notfound.png'>
      <h1>Pokemon not found</h1>`;
}//notfound


//Para el funcionamiento del navbar menu hamburguesa
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");

  if (navMenu.classList.contains("menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


//Desaparecer el navbar (header) al hacer scroll para evitar error con la cards al tope
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById('header').style.top = '0';
  }
  else {
    document.getElementById('header').style.top = '-100px';
  }
  ubicacionPrincipal = Desplazamiento_Actual;
}