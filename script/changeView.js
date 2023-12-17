import { displayPokemon } from './displayPokemon.js';
import { fetchPokemon, pokedex } from './pokemon-api.js';
import { myTeamView } from './myTeam.js';
import { initSearch, searchInput } from './searchPokemon.js';

const pokemonElement = document.querySelector('.pokemon-container');
const searchBtn = document.querySelector('.searchButton');
const myTeamBtn = document.querySelector('.myTeamButton');
const startView = document.querySelector('#startView');
const displayPokemonView = document.querySelector('#displayPokemon');
// const searchInput = document.querySelector('#searchInput');

const mainView = document.createElement('div');
const searchView = document.createElement('div');
mainView.classList.add('mainView', 'searchPokemon', 'pokemonTeam');

pokemonElement.appendChild(mainView);
pokemonElement.appendChild(searchView);

// focus i input när man kommer till sök fältet
initSearch();
document.addEventListener("DOMContentLoaded", function () {
    searchInput.focus();
});

// searchView.style.display = 'none';
// myTeamView.style.display = 'none';
searchInput.style.display = 'none';

searchBtn.addEventListener('click', async () => {
    mainView.classList.remove('mainView');
    myTeamView.style.display = 'none';
    // searchView.style.display = 'grid';
    searchInput.style.display = 'grid';
    try {
        // Hämta sparad data från LocalStorage
        const cachedPokemonData = localStorage.getItem('pokemonData');
        if (cachedPokemonData !== null) {
            // Använd sparad data om tillgänglig
            const cachedPokemon = JSON.parse(cachedPokemonData);
            displayPokemon(cachedPokemon);
            // checkPokemon(cachedPokemon); // Du kan ta bort detta om det inte används här
        } else {
            // Gör API-anrop om det inte finns sparad data
            fetchPokemon();
        }

        // displayPokemonView.style.display = 'flex';
    } catch (error) {
        console.error('Error displaying Pokemon:', error);
    }
});

myTeamBtn.addEventListener('click', () => {
    mainView.classList.remove('mainView');
    myTeamView.style.display = 'grid';
    searchView.style.display = 'none';
    displayPokemonView.style.display = 'none';
    searchInput.style.display = 'none';
});

startView.addEventListener('click', () => {
    mainView.classList.add('mainView');
    // searchView.style.display = 'none';
    // myTeamView.style.display = 'none';
    // displayPokemonView.style.display = 'none';
    searchInput.style.display = 'none';
});

export { searchView, myTeamView, pokemonElement };
