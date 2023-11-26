let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


function getAll() {
         return pokemonList;
     }
function addListeItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement('li');
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', showDetails(pokemon))
  button.addEventListener('click', function(){
     showDetails(pokemon.name);
  });
}    
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
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

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
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