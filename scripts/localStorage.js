let favorites = [];


function SaveToLocalStorage(personName) {
    favorites.push(personName)
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function ConsoleLogStorage() {
    const localStorageItem = localStorage.getItem('Favorites');

    console.log(JSON.parse(localStorageItem));
}

function RemoveFromLocalStorage() {
    favorites = [];
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}





export {SaveToLocalStorage, ConsoleLogStorage, RemoveFromLocalStorage}


