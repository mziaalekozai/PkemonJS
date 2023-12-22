import { displayPokemon } from './displayPokemon.js';

const pokemonPromise = []; 
const fetchPokemon = async () => {
    const cachedPokemonData = localStorage.getItem('pokemonData');

    if (cachedPokemonData) {
        const cachedPokemon = JSON.parse(cachedPokemonData);
        displayPokemon(cachedPokemon);
    } else {
        // fixa den forLoop att hämta alla pokemons
        for (let i = 1; i <= 1000; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            pokemonPromise.push(fetch(url).then((res) => res.json()));
        }

        try {
            const results = await Promise.all(pokemonPromise);
            const pokemon = results.map((result) => ({
                // pokemonPromise
                name: result.name,
                abilities: result.abilities.map((ability) => ({
                    name: ability.ability.name,
                })),
                image: result.sprites['front_default'],
            }));

            localStorage.setItem('pokemonData', JSON.stringify(pokemon));
            displayPokemon(pokemon);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    }
};

export { fetchPokemon,  };



// async function getPokemon() {
//     const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
//   async function fetchPokemonData(pokemonList) {
//     for (const pokemon of pokemonList) {
//       try {
//         const response = await fetch(pokemon.url);
//         const pokemonData = await response.json();
//       } catch (error) {
//         console.error(`Error fetching data for ${pokemon.name}:`, error);
//       }
//     }
//   }
  
//   export { getPokemon, fetchPokemonData };
  