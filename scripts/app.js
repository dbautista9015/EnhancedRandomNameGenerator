import addName from "../scripts/NameToList.js"

let nameInput = document.getElementById("nameInput");
let toListBtn = document.getElementById("button-addon1");

toListBtn.addEventListener('click', e => {
    if (nameInput.value.length !== 0) {
        addName(nameInput.value);
    }
})