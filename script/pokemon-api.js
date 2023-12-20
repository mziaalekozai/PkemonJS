import { displayPokemon } from './displayPokemon.js';
const pokedex = document.querySelector('#displayPokemon');

const pokemonList = [];

const fetchPokemon = async () => {
    const cachedPokemonData = localStorage.getItem('pokemonData');

    if (cachedPokemonData) {
        const cachedPokemon = JSON.parse(cachedPokemonData);
        displayPokemon(cachedPokemon);
    } else {
        for (let i = 1; i <= 1000; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            pokemonList.push(fetch(url).then((res) => res.json()));
        }

        try {
            const results = await Promise.all(pokemonList);
            const pokemon = results.map((result) => ({
                name: result.name,
                abilities: result.abilities.map((ability) => ({
                    name: ability.ability.name,
                    // Add any other properties you need from the ability
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

// const fetchPokemon = async () => {
//     // Kolla om det finns sparad data i LocalStorage
//     const cachedPokemonData = localStorage.getItem('pokemonData');

//     if (cachedPokemonData) {
//         // Använd sparad data om tillgänglig
//         const cachedPokemon = JSON.parse(cachedPokemonData);
//         displayPokemon(cachedPokemon);
//     } else {
//         // Gör API-anrop om det inte finns sparad data
//         for (let i = 1; i <= 1000; i++) {
//             const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//             pokemonList.push(fetch(url).then((res) => res.json()));
//         }

//         try {
//             const results = await Promise.all(pokemonList);
//             const pokemon = results.map((result) => ({
//                 name: result.name,
//                 abilities: result.abilities,
                
//                 image: result.sprites['front_default'],
//             }));

//             // Spara data i LocalStorage för framtida användning
//             localStorage.setItem('pokemonData', JSON.stringify(pokemon));

//             displayPokemon(pokemon);
//         } catch (error) {
//             console.error('Error fetching Pokemon:', error);
//         }
//     }
// };
export { fetchPokemon, pokedex };
