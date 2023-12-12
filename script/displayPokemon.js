const pokedex = document.getElementById('displayPokemon');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 10; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            // type: result.types.map((type) => type.type.name).join(', '),
            // id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title"> ${pokeman.name}</h2>
        <button class="addToTeamButton">Add to team</button>
        <button class="addToResButton">Add to reserve</button>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;

};

// fetchPokemon();

export {fetchPokemon, displayPokemon, pokedex};
