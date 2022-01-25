import {addName, addName2} from "../scripts/NameToList.js"
import {SaveToLocalStorage, CheckLocalStorage, RemoveFromLocalStorage} from "../scripts/localStorage.js"
import MakeTable from "./createTable.js";

let nameInput = document.getElementById("nameInput");
let toListBtn = document.getElementById("button-addon1");
let randomBtn = document.getElementById('button-addon2')

let listItems = document.getElementById('injectListItemHere');

let injectGroupHere = document.getElementById('injectGroupHere');

let numberOfPeople = document.getElementById('button-addon3');

let numberOfGroups = document.getElementById('button-addon4');







//Add list item when clicked
toListBtn.addEventListener('click', e => {
    if (nameInput.value.length !== 0) {
        
        //Add to local storage
        let itemElement = addName(nameInput.value);
        console.log(itemElement.textContent);

        SaveToLocalStorage(itemElement.textContent);

        listItems = document.getElementsByClassName('list-group-item');

    }
});

//Remove list items when clicked
listItems.addEventListener('click', e => {
    let storageNames = CheckLocalStorage();

    for (let i = 0; i < listItems.length; i++) {
        RemoveFromLocalStorage(storageNames[i]);
        listItems[i].remove();
        break;
    };

    if (listItems.length !== 0) {
        for (let j = 0; j < listItems.length; j++) {
            listItems[j].className = 'list-group-item';
        }
    }
    
});

randomBtn.addEventListener('click', e => {
    let storageNames = CheckLocalStorage();

    if (storageNames.length !== 0) {
        let randomNumber = Math.floor(Math.random() * storageNames.length);

        for (let i = 0; i < listItems.length; i++) {
            listItems[i].className = 'list-group-item';
        }

        listItems[randomNumber].className = 'list-group-item active';
        
    }
})

numberOfPeople.addEventListener('click', e => {

    let items = CheckLocalStorage();
    
    if (items.length !== 0) {
        if (numberOfPeople.value > 0 && numberOfPeople.value <= items.length) {
            MakeTable(numberOfPeople.value)
        } else {
            alert('You entered an invalid number, try again!');
        }
        
    }
    
})


function StartProgram() {
    let items = CheckLocalStorage();

    if (items.length !== 0) {
        for (let i = 0; i < items.length; i++) {
            addName2(items[i]);
        }
    }

    listItems = document.getElementsByClassName('list-group-item');


}



StartProgram();











