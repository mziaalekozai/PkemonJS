// removePokemon.js

import { teamList, reservList } from './myTeam.js';
import { displayMyTeam, displayReserv } from './displayPokemon.js';

function movePokemonToReservesFromTeam(pokemonIndex) {
  if (pokemonIndex < 0 || pokemonIndex >= teamList.length) {
    console.error('Ogiltigt index för att flytta från teamet till reserv.');
    return;
  }

  const movedPokemon = teamList.splice(pokemonIndex, 1)[0];

  if (reservList.length < 0) {
    // Om det finns plats i reservlistan, lägg till i reservlistan
    reservList.push(movedPokemon);
  } else {
    // Om reservlistan är full, flytta första Pokémon från reservlistan till sist i teamet
    const firstPokemonInReserves = reservList.shift();
    teamList.push(firstPokemonInReserves);
    // Lägg till den borttagna pokemon i reservlistan
    reservList.push(movedPokemon);
  }

  displayMyTeam(teamList);
  displayReserv(reservList);
}

function removeFromReserves(reserveIndex) {
  if (reserveIndex < 0 || reserveIndex >= reservList.length) {
    console.error('Ogiltigt index för att ta bort från reservlistan.');
    return;
  }

  const removedPokemon = reservList.splice(reserveIndex, 1)[0];

  // Uppdatering: Lägg bara tillbaka i teamet om det finns plats
  if (teamList.length < 3) {
    teamList.push(removedPokemon);
  }

  displayMyTeam(teamList);
  displayReserv(reservList);
}

export { movePokemonToReservesFromTeam, removeFromReserves };



