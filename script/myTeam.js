
import { displayMyTeam, displayReserv } from './displayPokemon.js';
const teamInfo = document.querySelector('.teamInfo');

let countMyTeam = 0;
let countMyReserv = 0;
let countMinTeam = 3;
let teamList = [];
let reservList = [];

const teamCount = document.createElement('p')
const reserveCount = document.createElement('p')
const teamTotalCount = document.createElement('p')
teamCount.innerText = 'Team ' + countMyTeam;
reserveCount.innerText = 'Reserv ' + countMyReserv;
teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';

teamCount.classList.add('teamCountInfo');
reserveCount.classList.add('teamCountInfo');
teamTotalCount.classList.add('teamCountInfo');

teamInfo.appendChild(teamCount);
teamInfo.appendChild(reserveCount);
teamInfo.appendChild(teamTotalCount);



const addToTeamList = (pokemon, nickname) => {
  // Check if the Pokemon already exists in teamList or reservList
  if (!teamList.some((p) => p.name === pokemon.name) && !reservList.some((p) => p.name === pokemon.name)) {
    // Add a copy of the Pokemon to the list
    if (teamList.length < 3) {
      // Update the counts and UI
      countMyTeam++;
      countMinTeam--;
      teamCount.innerText = 'Team ' + countMyTeam;
      teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';
      teamList.push({ ...pokemon, nickname: nickname });

      if (teamList.length === 3) {
        teamTotalCount.innerText = 'The team is complete';
      }
    } else {
      // Add to reservList if the team is already full
      reservList.push({ ...pokemon, nickname: nickname });
      countMyReserv++;
      reserveCount.innerText = 'Reserv ' + countMyReserv;
    }

    // Update the UI
    displayMyTeam(teamList);
    displayReserv(reservList);
  };
}

function updateTeamInfo() {
  countMyTeam = teamList.length;
  countMinTeam = Math.max(0, 3 - countMyTeam);
  countMyReserv = reservList.length;

  teamCount.innerText = 'Team ' + countMyTeam;
  teamTotalCount.innerText = 'You need ' + countMinTeam + ' in the team';
  reserveCount.innerText = 'Reserv ' + countMyReserv;
}

export { updateTeamInfo, countMinTeam, teamList, reservList, addToTeamList, teamInfo, countMyTeam, countMyReserv };
