import { pokedex } from './pokemon-api.js'
import { teamList, addToTeamList  } from './myTeam.js'

const displayPokemon = (pokemon) => {
    console.log('Display Pokemon:', pokemon);
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

    const addToTeamButtons = document.querySelectorAll('.addToTeamButton');
    addToTeamButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Lägg till Pokemon i teamet
            addToTeamList(pokemon[index]);
            console.log('Added to team:', pokemon[index]);
        });
    });
};

const myTeamDex = document.querySelector ('.myTeam')

const displayMyTeam = (pokemon) => {
    const pokemonHTMLString = pokemon
    .map((pokeman) => `
    ${pokeman ? `
    <li class="card">
    <img class="card-image" src="${pokeman.image}"/>
    <h2 class="card-title"> ${pokeman.name}</h2>
    <button class="removFromTeamBtn">Kicka</button>
    </li>
    ` : ''}
    `)
    .join('');
    myTeamDex.innerHTML = pokemonHTMLString;}


    const reservDex = document.querySelector ('.myReserv')

    const displayReserv = (pokemon) => {
        const pokemonHTMLString = pokemon
        .map((pokeman) => `
        ${pokeman ? `
        <li class="card">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title"> ${pokeman.name}</h2>
        <button class="removFromTeamBtn">Kicka</button>
        </li>
        ` : ''}
        `)
        .join('');
        reservDex.innerHTML = pokemonHTMLString;
    };
    
export { displayPokemon, displayReserv, displayMyTeam, myTeamDex, reservDex };

