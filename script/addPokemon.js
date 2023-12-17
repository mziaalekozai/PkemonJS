import {addPokemonToTeam} from "./displayPokemonToTeam.js";


let myTeam = []
let reserv = []

for (const child of addPokemonToTeam.children) {
    child.addEventListener('click', (event) => {
        // Your logic to handle the click event for each child
        console.log(`Clicked on ${child.textContent}`);
        // Add your logic to add the clicked Pokemon to your team or perform other actions
    });
} 