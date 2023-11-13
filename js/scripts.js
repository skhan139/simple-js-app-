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

     function add(pokemon) {
      if (typeof pokemon === 'object'){  
      pokemonList.push(pokemon);
     }
    }

     return {
         getAll: getAll,
         add: add
     };
 })();

 let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
     if (pokemon.height >0.5){ 
     document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm) - Wow, a big one!<br>');
     }else {
     document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm)<br>');
     }
    }); 