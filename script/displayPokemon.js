import { pokedex } from './pokemon-api.js'

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title"> ${pokeman.name}</h2>
        <button class="addToTeamButton">Add to team</button>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

export { displayPokemon };
