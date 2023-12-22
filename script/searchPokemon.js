// searchPokemon.js

import { displayPokemon } from './displayPokemon.js';
import { fetchPokemon } from './pokemon-api.js';
import { countMinTeam } from './myTeam.js';
const searchInput = document.querySelector('#searchInput');

const initSearch = () => {
  searchInput.innerText = ""
  searchInput.addEventListener('keyup', async (event) => {
    try {
      const cachedPokemonData = localStorage.getItem('pokemonData');
      const pokemonList = cachedPokemonData ? JSON.parse(cachedPokemonData) : await fetchPokemon();

      const searchQuery = event.target.value.trim().toLowerCase();

      if (searchQuery.length >= 1) {
        const matchedPokemon = pokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchQuery)
        );

        displayPokemon(matchedPokemon);
      } else {
        // Återställ till att visa alla Pokemon om sökningen är för kort
        displayPokemon(pokemonList);
      }
    } catch (error) {
      console.error('Error searching Pokémon:', error);
    }
  });
};

export { initSearch, searchInput };
