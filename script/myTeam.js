// import { pokemon } from "./displayPokemon.js";
// const pokemonElement = document.querySelector('.pokemon-container');

const myTeamView = document.createElement('div');
const removeBtn = document.createElement('button');


// team.js

let myTeam = [];

const addToTeam = (pokemon) => {
  if (myTeam.length < 6) {
    myTeam.push(pokemon);
    console.log(`${pokemon.name} added to your team!`);
    console.log('Your team:', myTeam);
  } else {
    console.log('Your team is full! Remove a Pokémon to add a new one.');
  }
};

const removeFromTeam = (pokemon) => {
  myTeam = myTeam.filter((p) => p !== pokemon);
  console.log(`${pokemon.name} removed from your team.`);
  console.log('Your team:', myTeam);
};

// export { myTeam, addToTeam, removeFromTeam };


// const displayMyTeam = (pokemon) => {

// // const pokemonHTMLString = pokemon
// // .map(
// //     (pokeman) => `
// //     <li class="card">
// //     <img class="card-image" src="${pokeman.image}"/>
// //     <h2 class="card-title"> ${pokeman.name}</h2>
// //     <button class="addToTeamButton">Add to team</button>
// //     </li>
// //     `
// //     )
//     pokemonElement.appendChild(myTeamView);
//     pokemonElement.appendChild(removeBtn);
//      myTeamView.innerHTML = pokemonHTMLString;
// }
     export { myTeamView    };