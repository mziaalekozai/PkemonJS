import { pokedex } from './pokemon-api.js'
import { changePokemonName } from './changePokeName.js'
import { teamList, reservList, addToTeamList } from './myTeam.js'
import { movePokemonToReservesFromTeam, removeFromReserves } from './removePokemon.js'
// import { initSearch } from './searchPokemon.js';
import { createReservHtmlElements, createTeamHtmlElements } from './createHtmlMap.js';
import { movePokemonUp, movePokemonDown } from './movePokeUpMovePokeDown.js';

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
            const selectedPokemon = pokemon[index]; // Get the current Pokemon
            changePokemonName(selectedPokemon, (newNickName) => {
                console.log('Changed name:', selectedPokemon);
                addToTeamList(selectedPokemon);
                console.log('Added to team:', selectedPokemon);
            });
        });
    });
};

const myTeamDex = document.querySelector('.myTeam');
const displayMyTeam = (pokemonList) => {
    const pokemonHTMLString = pokemonList
        .map((pokemon, index) => createTeamHtmlElements(pokemon, index))
        .join('');
    myTeamDex.innerHTML = pokemonHTMLString;

    const moveUpBtn = document.querySelectorAll('.moveUp');
    const moveDownBtn = document.querySelectorAll('.moveDown');
    const removeFromTeamBtn = document.querySelectorAll('.removFromTeamBtn');

    // Add event listeners for moveUp and moveDown buttons
    moveUpBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Move up');
            movePokemonUp(teamList[index], teamList);
            displayMyTeam(teamList);
        });
    });

    moveDownBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Move down');
            movePokemonDown(teamList[index], teamList);
            displayMyTeam(teamList);
        });
    });

    removeFromTeamBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Remove from team');
            movePokemonToReservesFromTeam(index);
        });
    });
};

const reservDex = document.querySelector('.myReserv')
const displayReserv = (pokemonList) => {
    const pokemonHTMLString = pokemonList
        .map((pokemon, index) => createReservHtmlElements(pokemon, index))
        .join('');
    reservDex.innerHTML = pokemonHTMLString;

    const removeFromReservBtn = document.querySelectorAll('.removFromReservBtn');
    const moveUpReservBtn = document.querySelectorAll('.moveUpReservPoke');
    const moveDownReservBtn = document.querySelectorAll('.moveDownReservPoke');
   
    moveUpReservBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Move up button clicked');
            movePokemonUp(reservList[index], reservList);
            displayReserv(reservList);
        });
    });
    
    moveDownReservBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Move down button clicked');
            movePokemonDown(reservList[index], reservList);
            displayReserv(reservList);
        });
    });

    removeFromReservBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Remove from reserves');
            removeFromReserves(index);
        });
    });

    
};

// const displayMyTeam = (pokemon) => {
//     // byt namn pokemon till PokemonList
//     const pokemonHTMLString = pokemon
//         .map((pokemon) => createTeamHtmlElements(pokemon))
//         .join('');
//     myTeamDex.innerHTML = pokemonHTMLString;

//     const moveUpBtn = document.querySelectorAll('.moveUp');
//     const moveDownBtn = document.querySelectorAll('.moveDown');
//     const removeFromTeamBtn = document.querySelectorAll('.removFromTeamBtn');
//     removeFromTeamBtn.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             console.log('Remove from team');
//             movePokemonToReservesFromTeam(index);
//         });
//     });
// };



// const displayReserv = (pokemon) => {
//     const pokemonHTMLString = pokemon
//     .map((pokemon) => createReservHtmlElements(pokemon))
//         .join('');
//     reservDex.innerHTML = pokemonHTMLString;

//     const removeFromReservBtn = document.querySelectorAll('.removFromReservBtn');
//     removeFromReservBtn.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             console.log('Remove from reserves');
//             removeFromReserves(index);
//         });
//     });
// };

export { displayPokemon, displayReserv, displayMyTeam, myTeamDex, reservDex };


