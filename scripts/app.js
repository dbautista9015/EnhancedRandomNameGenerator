import addName from "../scripts/NameToList.js"
import {SaveToLocalStorage, ConsoleLogStorage, RemoveFromLocalStorage} from "../scripts/localStorage.js"

let nameInput = document.getElementById("nameInput");
let toListBtn = document.getElementById("button-addon1");

toListBtn.addEventListener('click', e => {
    if (nameInput.value.length !== 0) {
        
        //Add to local storage
        let itemTextContent = addName(nameInput.value);
        console.log(itemTextContent);

        SaveToLocalStorage(itemTextContent);

        RemoveFromLocalStorage();

        ConsoleLogStorage();

    }
})