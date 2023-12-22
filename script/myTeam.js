
import { displayMyTeam, displayReserv } from './displayPokemon.js';
import { newNickname } from "./changePokeName.js";
const teamInfo = document.querySelector('.teamInfo');

const teamCount = document.createElement('p')
const reserveCount = document.createElement('p')
const teamTotalCount = document.createElement('p')
teamCount.innerText = 'Team: 0';
reserveCount.innerText = 'Reserv: 0';
teamTotalCount.innerText = 'You need 3 in the team';

teamCount.classList.add('teamCountInfo');
reserveCount.classList.add('teamCountInfo');
teamTotalCount.classList.add('teamCountInfo');

teamInfo.appendChild(teamCount);
teamInfo.appendChild(reserveCount);
teamInfo.appendChild(teamTotalCount);


let countMyTeam = 0;
let countMyReserv = 0;
let countMinTeam = 3;
let teamList = [];
let reservList = [];

const addToTeamList = (pokemon, nickname) => {
  console.log('Adding to team:', pokemon);

  // Check if the Pokemon already exists in teamList or reservList
  if (!teamList.some((p) => p.name === pokemon.name) && !reservList.some((p) => p.name === pokemon.name)) {
    // Add a copy of the Pokemon to the list
    if (teamList.length < 3) {
      teamList.push({ ...pokemon, nickname: nickname });
      // Update the counts and UI
      countMyTeam++;
      countMinTeam--;
      teamCount.innerText = 'Team ' + countMyTeam;
      teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';

      if (teamList.length === 3) {
        teamTotalCount.innerText = 'The team is complete';
      }
    } else {
      // Add to reservList if the team is already full
      reservList.push({ ...pokemon, nickname: nickname });
      console.log('Adding to reserv', pokemon);
      countMyReserv++;
      reserveCount.innerText = 'Reserv ' + countMyReserv;
    }

    // Update the UI
    displayMyTeam(teamList);
    displayReserv(reservList);
  };
}
  export { countMinTeam, teamList, reservList, addToTeamList, teamInfo, countMyTeam, countMyReserv };


// const addToTeamList = (pokemon, callback) => {
//   console.log('Adding to team:', pokemon);
//   // Kontrollera om Pokemon redan finns i antingen teamList eller reservList
//   //   if (!teamList.includes(pokemon) && !reservList.includes(pokemon)) {
//   if (teamList.length < 3) {
//     teamList.push(pokemon);
//     countMyTeam++;
//     countMinTeam--;
//     teamCount.innerText = 'Team ' + countMyTeam;
//     teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';

//     if (teamList.length === 3) {
//       teamTotalCount.innerText = 'The team is complete ';
//       //   teamTotalCount.classList.add("hide");
//     }
//     // callback()
//   } else {
//     //   if (teamList.length === 3) {
//     //       teamTotalCount.classList.add("hide");
//     //   }
//     reservList.push(pokemon);
//     console.log('Adding to reserv', pokemon);
//     countMyReserv++;
//     reserveCount.innerText = 'Reserv ' + countMyReserv;
//     //   reserveCount.classList.add("show");
//     // callback()
//   }
//   displayMyTeam(teamList);
//   displayReserv(reservList);
//   //   }
//   //    else {
//   //       console.log('Pokemon already in team or reserv');
//   //   }
// };


// export { countMinTeam, teamList, reservList, addToTeamList, teamInfo, countMyTeam, countMyReserv };


