
import { displayMyTeam, displayReserv } from './displayPokemon.js';

const teamInfo = document.querySelector('.teamInfo');
// const myTeamBtnContainer = document.querySelector('#displayPokemon'); // Ändra till rätt förälder
// const myTeamBtn = document.querySelector('.addToTeamButton');
// const teamElement = document.querySelector('.myTeam');
// const reservElement = document.querySelector('.myReserv');

const teamCount = document.createElement('p')
const reserveCount = document.createElement('p')
const teamTotalCount = document.createElement('p')
teamCount.innerText = 'Team: 0';
reserveCount.innerText = 'Reserv: 0';
teamTotalCount.innerText = 'Du behöver 3 i teamet';

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
  if (!teamList.includes(pokemon) && !reservList.includes(pokemon)) {
      if (teamList.length < 3) {
          teamList.push(pokemon);
          countMyTeam++;
          countMinTeam--;
          teamCount.innerText = 'Team ' + countMyTeam;
          teamTotalCount.innerText = 'Du behöver ' + countMinTeam + ' i teamet';

          if (teamList.length === 3) {
              teamTotalCount.classList.add("hide");
          }
      } else {
          if (teamList.length === 3) {
              teamTotalCount.classList.add("hide");
          }
          reservList.push(pokemon);
          console.log('Adding to reserv', pokemon);
          countMyReserv++;
          reserveCount.innerText = 'Reserv ' + countMyReserv;
          reserveCount.classList.add("show");
      }
      displayMyTeam(teamList);
      displayReserv(reservList);
  } else {
      console.log('Pokemon already in team or reserv');
  }
};


export { teamList, addToTeamList, teamInfo };


