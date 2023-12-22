// removePokemon.js
import { teamList, reservList, countMyReserv, countMyTeam, countMinTeam } from './myTeam.js';
import { displayMyTeam, displayReserv } from './displayPokemon.js';

function movePokemonToReservesFromTeam(pokemonIndex) {
  if (pokemonIndex < 0 || pokemonIndex >= teamList.length) {
    console.error('Ogiltigt index för att flytta från teamet till reserv.');
    return;
  }

  const movedPokemon = teamList.splice(pokemonIndex, 1)[0];

  if (reservList.length > 0) {
    // Om reservlistan inte är tom, flytta sist i reservlistan
    reservList.push(movedPokemon);
    // countMyReserv++;
    // countMinTeam--;

    // Flytta första Pokémon från reservlistan till sist i teamet
    const firstPokemonInReserves = reservList.shift();
    teamList.push(firstPokemonInReserves);
  }

  displayMyTeam(teamList);
  displayReserv(reservList);
}

function removeFromTeam(pokemonIndex) {
  if (pokemonIndex < 0 || pokemonIndex >= teamList.length) {
    console.error('Invalid index to remove from team.');
    return;
  }
  
  const removedPokemon = teamList.splice(pokemonIndex, 1)[0]; // Ta bort från teamet
  
  if (reservList.length === 0) {
    // Om reservlistan är tom, uppdatera endast teamets gränssnitt
    displayMyTeam(teamList);
  } else {
    // Annars, flytta första Pokémon från reservlistan till sist i teamet
    const firstPokemonInReserves = reservList.shift();
    teamList.push(firstPokemonInReserves);
    displayMyTeam(teamList);
  }
  countMyTeam --;
  teamCount.innerText = 'Team ' + countMyTeam;
}

function removeFromReserves(reserveIndex) {
  console.log('Remove from reserve list2');
  if (reserveIndex < 0 || reserveIndex >= reservList.length) {
    console.error('Invalid index to remove from reserve list.');
    return;
  }

  reservList.splice(reserveIndex, 1);
    // countMyReserv--;

  displayReserv(reservList);
}

export { movePokemonToReservesFromTeam, removeFromTeam, removeFromReserves };



