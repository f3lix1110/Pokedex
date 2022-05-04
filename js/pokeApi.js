
const search = event => {
  event.preventDefault();
  const{value} = event.target.pokemon;

//mediante fetch podremos hacer la consulta al api
fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
.then(response => response.json())
.then(pokemon_data => {
//flujo basico de navegacion de recursos obtenidos del api
  let element = document.getElementById('pokemon')
  element.innerHTML = `
  <img class="pokeimg" src='${pokemon_data.sprites.front_default}'>
  <p> Name: ${pokemon_data['name']}<p>
  <p> Pokedex Number: ${pokemon_data.id}<p>
  <p> Type: ${pokemon_data.types[0].type.name}<p>       
  <p> Points of experience: ${pokemon_data.base_experience}<p>
  <p> Height: ${pokemon_data.height}<p>`;

}).catch(err=>notfound()) //si encontramos un error al hacer la consulta->

}//search

function notfound(){//->ejecutaremos una imagen con advertencia

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
