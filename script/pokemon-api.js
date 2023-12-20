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

export { fetchPokemon, pokedex };
