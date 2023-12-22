import { displayPokemon } from "./displayPokemon.js";
import { addToTeamList, teamList } from './myTeam.js'

const nickNameElement = document.querySelector('.nickName');
let newNickname = " ";

const changePokemonName = (pokemon, callback) => {
    console.log('Change Pokemon Name function called');
    const createHtmlElements = `
        <label class="nikeNameLabel">Choose the name</label>
        <p class="error">The name please...</p>
        <input type="text" class="nicknameInput" value="${pokemon.name}">
        <button class="saveBtn">Save</button>
        <button class="closeBtn">Close</button>
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

    saveBtn.addEventListener('click', () => {
        newNickname = inputNickName.value.trim();
        console.log('Save Pokemon Name function called');
        nickNameElement.classList.add("hide");

        if (newNickname !== '') {
            // Assuming pokemon.name is a string
            pokemon.name = newNickname;
            console.log('Updated Pokemon:', pokemon);
            callback(pokemon, newNickname);
            console.log('Saved Pokemon Name ', pokemon.name, newNickname);

            // Update the display (assuming displayPokemon is a function that updates the UI)
            // displayPokemon([pokemon]);
        } else {
            nickNameElement.classList.remove("hide");
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

export { changePokemonName, nickNameElement, newNickname };





































// import { displayPokemon } from "./displayPokemon.js";
// import { addToTeamList, teamList } from './myTeam.js'

// const nickNameElement = document.querySelector('.nickName');
// let newNickname = " "

// const changePokemonName = (pokemon, callback) => {
//     console.log('Change Pokemon Name function called');
//     const createHtmlElements = `
//     <label class="nikeNameLabel">Choose the name</label>
//     <p class = "error">The name please...</p>
//     <input type="text" class="nicknameInput" value="${pokemon.name}">
//     <button class="saveBtn">Save</button>
//     <button class="closeBtn">Close</button>
//     `;

//     nickNameElement.innerHTML = createHtmlElements;
//     nickNameElement.classList.remove("hide");

//     const inputNickName = document.querySelector('.nicknameInput');
//     const saveBtn = document.querySelector('.saveBtn');
//     const closeBtn = document.querySelector('.closeBtn');
//     const errorElement = document.querySelector('.error');
//     errorElement.classList.add("hide");

//     // focus i input när man kommer till fältet
//     inputNickName.focus();
    
//     saveBtn.addEventListener('click', () => {
//         newNickname = inputNickName.value.trim();
//         console.log('Save Pokemon Name function called');
//         nickNameElement.classList.add("hide");

//         if (newNickname !== '') {
//             // Assuming pokemon.name is a string
//             // pokemon.name = newNickname;
//             console.log('Updated Pokemon:', pokemon);
//             callback(pokemon, newNickname);
//             console.log('Saved Pokemon Name ',pokemon.name, newNickname);

//             // Update the display (assuming displayPokemon is a function that updates the UI)
//             // displayPokemon([pokemon]);
//         } else {
//             nickNameElement.classList.remove("hide");
//             errorElement.classList.remove('hide');
//         }
//     });
//     closeBtn.addEventListener('click', () => {
//         nickNameElement.classList.add('hide'); // Göm input och knappar om användaren stänger
//     });
//     document.addEventListener("click", function () {
//         inputNickName.focus();

//     });

// };

// export { changePokemonName, nickNameElement, newNickname };

