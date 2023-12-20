
const nickNameElement = document.querySelector('.nickName');

const changePokemonName = (pokemon, callback) => {
    console.log('Change Pokemon Name function called');
    const createHtmlElements = `
        <label class="nikeNameLabel">Välj namnet</label>
        <p class = "error">Namnet tack...</p>
        <input type="text" class="nicknameInput" value="${pokemon.name}">
        <button class="saveBtn">Spara</button>
        <button class="closeBtn">Stäng</button>
    `;
    
    nickNameElement.innerHTML = createHtmlElements;
    nickNameElement.classList.remove("hide");
    
    const inputNickName = document.querySelector('.nicknameInput');
    const saveBtn = document.querySelector('.saveBtn');
    const closeBtn = document.querySelector('.closeBtn');
    const errorElement = document.querySelector('.error');
    errorElement.classList.add("hide");
    
    // focus i input när man kommer till fältet
    inputNickName.focus();
    // inputNickName.value = pokemon.nickname || ''; // Visa befintligt smeknamn i input-fältet
    saveBtn.addEventListener('click', () => {
    console.log('Save Pokemon Name function called');
    nickNameElement.classList.add("hide");
    const newNickname = inputNickName.value.trim();
    if (newNickname !== '') {
        // Om ett nytt smeknamn har angetts, uppdatera Pokemon-namnet
        pokemon.name = newNickname;
        callback(pokemon); // Anropa callback-funktionen för att uppdatera gränssnittet
        console.log('Saved Pokemon Name ', newNickname);
    }else {
    errorElement.classList.remove('hide'); 
    }
});
    
    closeBtn.addEventListener('click', () => {
        nickNameElement.classList.add('hide'); // Göm input och knappar om användaren stänger
    });
    document.addEventListener("click", function () {
        inputNickName.focus();
        
    });
    
};

export { changePokemonName, nickNameElement };


// import { displayPokemon } from "./displayPokemon.js";
// import { teamList } from "./myTeam.js";
// import { initSearch } from "./searchPokemon.js";

// const nickNameElement = document.querySelector('.nickName');

// const changePokemonName = (pokemon, callback) => {
//     console.log('Change Pokemon Name function called');    
//     const createHtmlElements = `
//         <label class='error>Välj namnet</label>
//         <input type="text" class="nicknameInput" value="${pokemon.name}">
//         <button class="saveBtn">Spara</button>
//         <button class="closeBtn">Stäng</button>
//     `;
    
//     nickNameElement.innerHTML = createHtmlElements;
//     nickNameElement.classList.remove("hide");
    
//     const inputNickName = document.querySelector('.nicknameInput');
//     const saveBtn = document.querySelector('.saveBtn');
//     const closeBtn = document.querySelector('.closeBtn');
    
//     // focus i input när man kommer till fältet
//     inputNickName.focus();
//     // inputNickName.value = pokemon.nickname || ''; // Visa befintligt smeknamn i input-fältet
//     saveBtn.addEventListener('click', () => {
//         console.log('Save Pokemon Name function called');    
        
//         const newNickname = inputNickName.value.trim();
//         if (newNickname !== '') {
//             // Om ett nytt smeknamn har angetts, uppdatera Pokemon-namnet    
//             pokemon.name = newNickname;
//             callback(pokemon); // Anropa callback-funktionen för att uppdatera gränssnittet
//             nickNameElement.classList.add('hide'); // Göm input och knappar efter ändringen
//             // nickNameElement.classList.remove('hide');
//             console.log('Saved Pokemon Name ', newNickname);
//         }
//     });
    
//     closeBtn.addEventListener('click', () => {
//         nickNameElement.classList.add('hide'); // Göm input och knappar om användaren stänger    
//     });
    
//     document.addEventListener("click", function () {
//         inputNickName.focus();    
//     });
// };

// export { changePokemonName, nickNameElement };





// const nickNameElement = document.querySelector('.nickName');

// const changeNameBtn = document.querySelectorAll('.addToTeamButton');


// const label = document.createElement("label");
// const inputNickName = document.createElement("input");
// const saveBtn = document.createElement("button");
// const closeBtn = document.createElement("button");
// label.innerText = 'Väje namnet';
// saveBtn.innerText = "Lägg till";
// closeBtn.innerText = "Stänga";
// // inputNickName.value = pokemon.name;
// nickNameElement.appendChild(label);
// nickNameElement.appendChild(inputNickName);
// nickNameElement.appendChild(saveBtn);
// nickNameElement.appendChild(closeBtn);
// const changePokemonName = (pokemon, callback) => {
//     inputNickName.value = pokemon.name; // Visa befintligt namn i input-fältet
//     nickNameElement.classList.remove("hide");

// saveBtn.addEventListener('click', () => {
//     const newNickname = inputNickName.value.trim();
//     if (newNickname !== '') {
//         // Om ett nytt smeknamn har angetts, uppdatera Pokemon-namnet
//         pokemon.nickname = newNickname;
//         callback(); // Anropa callback-funktionen (ex. displayMyTeam) för att uppdatera gränssnittet
//     }
//     nickNameElement.classList.add("hide"); // Göm input och knappar efter ändringen
// });

// closeBtn.addEventListener('click', () => {
//     nickNameElement.classList.add("hide"); // Göm input och knappar om användaren stänger
// });
// };

// export {nickNameElement, saveBtn, closeBtn}