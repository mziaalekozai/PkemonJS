import { pokedex } from './pokemon-api.js'
import { changePokemonName } from './changePokeName.js'
import { teamList, reservList, addToTeamList } from './myTeam.js'
import { movePokemonToReservesFromTeam, removeFromReserves } from './removePokemon.js'
import { initSearch } from './searchPokemon.js';

const displayPokemon = (pokemon) => {
    console.log('Display Pokemon:', pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokemon) => `
            <li class="card">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title"> ${pokemon.name}</h2>
            <button class="addToTeamButton">Add to team</button>
            </li>
            `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;

    const addToTeamButtons = document.querySelectorAll('.addToTeamButton');
    addToTeamButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changePokemonName(pokemon[index], () => {
                console.log('Changed name:', pokemon[index]);
                addToTeamList(pokemon[index]);
                console.log('Added to team:', pokemon[index]);
            });
        });
    });
};

const myTeamDex = document.querySelector('.myTeam');

const displayMyTeam = (pokemon) => {
    const pokemonHTMLString = pokemon
        .map((pokemon) => {
            const abilitiesInfo = pokemon.abilities.map((ability) => `<p>${ability.name}</p>`).join('');
            return `
                ${pokemon ? `
                    <li class="card">
                        <img class="card-image" src="${pokemon.image}"/>
                        <h2 class="card-title"> ${pokemon.name}</h2>
                        <p class="abilities">Abilitys: ${abilitiesInfo}</p>
                        <button class="removFromTeamBtn">Kicka</button>
                    </li>
                ` : ''}
            `;
        })
        .join('');
    myTeamDex.innerHTML = pokemonHTMLString;

    const removeFromTeamBtn = document.querySelectorAll('.removFromTeamBtn');
    removeFromTeamBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Remove from team');
            movePokemonToReservesFromTeam(index);
        });
    });
};


const reservDex = document.querySelector('.myReserv')

const displayReserv = (pokemon) => {
    const pokemonHTMLString = pokemon
        .map((pokemon) => {
            const abilitiesInfo = pokemon.abilities.map((ability) => `<p>${ability.name}</p>`).join('');
            return `
            ${pokemon ? `
                <li class="card">
                    <img class="card-image" src="${pokemon.image}"/>
                    <h2 class="card-title"> ${pokemon.name}</h2>
                    <p class="abilities">Abilitys ${abilitiesInfo}</p>
                    <button class="removFromReservBtn">Kicka</button>
                </li>
            ` : ''}
        `;
        })
        .join('');
    reservDex.innerHTML = pokemonHTMLString;

    const removeFromReservBtn = document.querySelectorAll('.removFromReservBtn');
    removeFromReservBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Remove from reserves');
            removeFromReserves(index);
        });
    });
};

export { displayPokemon, displayReserv, displayMyTeam, myTeamDex, reservDex };

