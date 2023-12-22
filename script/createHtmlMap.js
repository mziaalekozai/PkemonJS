const createTeamHtmlElements = (pokemon) => {
    const abilitiesInfo = pokemon.abilities.map((ability) => `<p>${ability.name}</p>`).join('');
    return `
        ${pokemon ? `
            <li class="card">
                <img class="card-image" src="${pokemon.image}"/>
                <h2 class="card-title"> ${pokemon.name}</h2>
                <p class="abilities">Abilitys: ${abilitiesInfo}</p>
                <div class="moveButtons"> 
                    <div class="moveUp"> <== </div>
                    <button id= "removFromReservBtn" class="removFromTeamBtn">Kick</button>
                    <div class="moveDown"> ==> </div>
                </div>
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
                <div class="moveButtons"> 
                    <div class="moveUpReservPoke"> <== </div>
                    <button class="removFromReservBtn">Kick</button>
                    <div class="moveDownReservPoke"> ==> </div>
                </div>
            </li>
        ` : ''}
    `};

export { createTeamHtmlElements, createReservHtmlElements };

