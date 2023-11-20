let pokemonRepository = (function () {
let pokemonList = [
{
    name: 'pikachu',
    height: 0.4,
    types: ['electric']
},  
{
    name: 'squirtle',
    height: 0.5,
    types: ['water']
},
{
    name: 'golem',
    height: 1,
    types: ['Rock, Ground'],
}
];

function getAll() {
         return pokemonList;
     }
function addListeItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement('li');
  let button = document.createElement("button");
  button.innerText = "pokemon.name";
  button.classList.add("button-class");
  listpokemon.append.child(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', showDetails(pokemon))
  button.addEventListener('click', function(){
     showDetails(pokemon.name);
  });
}    

    function showDetails(pokemon){
        console.log(pokemon);
    }

        
    
     function add(pokemon) {
      if (typeof pokemon === 'object'){  
      pokemonList.push(pokemon);
     }
    }

     return {
         getAll: getAll,
         add: add,
         showDetails: showDetails,
         addListItem: addListeItem
     };
 })();

 let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});