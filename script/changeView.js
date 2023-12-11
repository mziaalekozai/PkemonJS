// import { searchPokemons } from './scripts/searchPokemons.js';
const pokemonElement = document.querySelector('.pokemon-container');
const searchBtn = document.querySelector('.searchButton');
const myTeamBtn = document.querySelector('.myTeamButton');
const startView = document.querySelector('#startView');

const mainView = document.createElement('div');
const myTeamView = document.createElement('div');
const searchView = document.createElement('div');
const searchInput = document.createElement('input');
searchInput.type = 'text', searchInput.placeholder = 'Sök pokemon'; 

searchInput.classList.add('searchInput');
mainView.classList.add('mainView');
mainView.classList.add('searchPokemon');
mainView.classList.add('pokemonTeam');

pokemonElement.appendChild(mainView);
pokemonElement.appendChild(myTeamView);
pokemonElement.appendChild(searchView);
searchView.appendChild(searchInput);

// focus i input när man kommer till sök fillted
let input = document.querySelector(".searchInput");
input.focus()

document.addEventListener("click", function () {
    input.focus();

});

searchView.style.display = 'none';
myTeamView.style.display = 'none';

// Här kommer man till sök fillted när man trycker på kappen sök pokemon.
searchBtn.addEventListener('click', () => {
    mainView.classList.remove('mainView');
    myTeamView.style.display = 'none';
    searchView.style.display = 'flex';
    
});
// Här kommer man till mitt lag när man trycker på kappen mitt lag.
myTeamBtn.addEventListener('click', () => {
    mainView.classList.remove('mainView');
    myTeamView.style.display = 'flex';
    searchView.style.display = 'none';
    
});
// Här kommer man till lodding sida när man trycker på pokemon i header.
startView.addEventListener('click', () => {
    mainView.classList.add('mainView');
    searchView.style.display = 'none';
    myTeamView.style.display = 'none';
    
});


export  { searchView, myTeamView };