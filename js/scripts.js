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

//Each object within the array is represented with i. The property picked to be used is formatted as pokemonList.property
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
} 
//the code within document.write is used when the height value of a pokemon exceeds >0.5
if (pokemonList[i].height > 0.5) {
    document.write(' - Wow! a big one!');
    document.write(' - Wow! a big one!'); // document.write
}