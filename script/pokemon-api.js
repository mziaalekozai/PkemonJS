let pokemonPromises = [];

const fetchPokemon = async () => {
    const cachedPokemonData = localStorage.getItem('pokemonData');
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    if (cachedPokemonData) {
        // Använda cachedPokemonData direkt om det finns i localStorage
        const cachedPokemon = JSON.parse(cachedPokemonData);
        displayPokemon(cachedPokemon);
    } else {
        try {
            // Hämta data för alla pokemons i en enda API-förfrågan
            const response = await fetch(url);
            const data = await response.json();

            // Skapa en lista med Promise-objekt för varje pokemon
            pokemonPromises = data.results.map((pokemon) =>
                fetch(pokemon.url).then((res) => res.json())
            );

            // Vänta på att alla Pokemon ska hämtas
            const results = await Promise.all(pokemonPromises);

            // Omvandla resultatet till det format du behöver
            const pokemon = results.map((result) => ({
                name: result.name,
                abilities: result.abilities.map((ability) => ({
                    name: ability.ability.name,
                })),
                image: result.sprites['front_default'],
            }));

            // Spara pokemon-data i localStorage
            localStorage.setItem('pokemonData', JSON.stringify(pokemon));

            // Visa pokemons på sidan
            displayPokemon(pokemonPromises);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    }
};

export { fetchPokemon };
