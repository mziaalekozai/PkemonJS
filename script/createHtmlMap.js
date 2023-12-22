const createTeamHtmlElements = (pokemon) => {
    const abilitiesInfo = pokemon.abilities.map((ability) => `<p>${ability.name}</p>`).join('');
    return `
        ${pokemon ? `
            <li class="card">
                <img class="card-image" src="${pokemon.image}"/>
                <h2 class="card-title"> ${pokemon.name}</h2>
                <p class="abilities">Abilitys: ${abilitiesInfo}</p>
                <button class="moveUp"> <== </button>
                <button id= "removFromReservBtn" class="removFromTeamBtn">Kicka</button>
                <button class="moveDown"> ==> </button>
            </li>
        ` : ''}
    `};
// Jag har createReservHtmlElements för att removeFromReserves knappen behövde jag :) 
const createReservHtmlElements = (pokemon) => {
    const abilitiesInfo = pokemon.abilities.map((ability) => `<p>${ability.name}</p>`).join('');
    return `
        ${pokemon ? `
            <li class="card">
                <img class="card-image" src="${pokemon.image}"/>
                <h2 class="card-title"> ${pokemon.name}</h2>
                <p class="abilities">Abilitys: ${abilitiesInfo}</p>
                <button class="moveUpReservPoke"> <== </button>
                <button class="removFromReservBtn">Kicka</button>
                <button class="moveDownReservPoke"> ==> </button>
            </li>
        ` : ''}
    `};

export { createTeamHtmlElements, createReservHtmlElements };

