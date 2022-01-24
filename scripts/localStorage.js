let favorites = CheckLocalStorage();


function SaveToLocalStorage(personName) {
    favorites.push(personName)
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function SaveToLocalStorage2() {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function CheckLocalStorage() {
    const localStorageItem = localStorage.getItem('Favorites');

    return JSON.parse(localStorageItem);
}

function RemoveFromLocalStorage(personName) {
    let localStorageItemIndex = favorites.indexOf(personName)
    favorites.splice(personName, 1);
    SaveToLocalStorage2();
}





export {SaveToLocalStorage, CheckLocalStorage, RemoveFromLocalStorage}


