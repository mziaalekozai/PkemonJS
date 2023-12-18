import { displayPokemon, displayMyTeam, myTeamDex } from './displayPokemon.js';
import { fetchPokemon, pokedex } from './pokemon-api.js';
import {teamInfo} from './myTeam.js';
import { initSearch, searchInput } from './searchPokemon.js';

const pokemonElement = document.querySelector('.pokemon-container');
const searchBtn = document.querySelector('.searchButton');
const myTeamBtn = document.querySelector('.myTeamButton');
const startView = document.querySelector('#startView');
const displayPokemonView = document.querySelector('#displayPokemon');
const myTeamContainer = document.querySelector('.myTeam-container');

const mainView = document.createElement('div');
const searchView = document.createElement('div');
mainView.classList.add('mainView', 'searchPokemon', 'pokemonTeam');

pokemonElement.appendChild(mainView);
pokemonElement.appendChild(searchView);

// focus i input när man kommer till sök fältet
// searchInput.focus();
// document.addEventListener("click", function () {
//     searchInput.focus();
// });


searchInput.classList.add("hide");
myTeamContainer.classList.add("hide");
teamInfo.classList.add("hide");

searchBtn.addEventListener('click', async () => {
    initSearch();
    teamInfo.classList.remove("hide");
    myTeamContainer.classList.add("hide");
    mainView.classList.remove('mainView');
    // myTeamContainer.style.display = 'none';
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
        
        displayPokemonView.style.display = 'flex';
    } catch (error) {
        console.error('Error displaying Pokemon:', error);
    }
});

myTeamBtn.addEventListener('click', () => {
    mainView.classList.remove('mainView');
    myTeamContainer.style.display = 'grid';
    pokemonElement.style.display = 'none';
    searchView.style.display = 'none';
    displayPokemonView.style.display = 'none';
    searchInput.style.display = 'none';
    // myTeamDex.style.display = 'grid';
    myTeamContainer.classList.remove("hide");
    // displayMyTeam(teamList);
});

startView.addEventListener('click', () => {
    mainView.classList.add('mainView');
    searchView.style.display = 'none';
    myTeamContainer.style.display = 'none';
    displayPokemonView.style.display = 'none';
    searchInput.style.display = 'none';
});

export { searchView,  pokemonElement };
