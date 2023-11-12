let pokemonRepository = (function(){
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

return {
     getAll: function(){
       return pokemonList;
     },
     add: function (item) {
         pokemonList.push(item);
   }
 } 
 })();

pokemonList.forEach(function(pokemon){

 console.log(pokemonRepository.getAll());
 console.log(pokemonRepository.add({ name: 'Golem', height: 1, type: ['Rock, Ground'] }));


 pokemonRepository.getAll().forEach(function(pokemon){
   if (pokemon.height > 1) {
         document.write(
           pokemon.name +
             "  " +
             "  " + 
             "(height:" +
             "  " +
             pokemon.height +
