
import { displayMyTeam, displayReserv } from './displayPokemon.js';

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


const addToTeamList = (pokemon) => {
  console.log('Adding to team:', pokemon);
  // Kontrollera om Pokemon redan finns i antingen teamList eller reservList
//   if (!teamList.includes(pokemon) && !reservList.includes(pokemon)) {
      if (teamList.length < 3) {
          teamList.push(pokemon);
          countMyTeam++;
          countMinTeam--;
          teamCount.innerText = 'Team ' + countMyTeam;
          teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';

          if (teamList.length === 3) {
          teamTotalCount.innerText = 'The team is complete ';
        //   teamTotalCount.classList.add("hide");
          }
      } else {
        //   if (teamList.length === 3) {
        //       teamTotalCount.classList.add("hide");
        //   }
          reservList.push(pokemon);
          console.log('Adding to reserv', pokemon);
          countMyReserv++;
          reserveCount.innerText = 'Reserv ' + countMyReserv;
        //   reserveCount.classList.add("show");
      }
      displayMyTeam(teamList);
      displayReserv(reservList);
//   }
//    else {
//       console.log('Pokemon already in team or reserv');
//   }
};


export {countMinTeam, teamList, reservList, addToTeamList, teamInfo, countMyTeam, countMyReserv };


