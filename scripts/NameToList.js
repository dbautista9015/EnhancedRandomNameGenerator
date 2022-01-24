function addName(name) {
    let injectListItemHere = document.getElementById('injectListItemHere');

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = name;

    injectListItemHere.appendChild(li);

    

    return li;

}

function addName2(name) {
    let injectListItemHere = document.getElementById('injectListItemHere');

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = name;

    injectListItemHere.appendChild(li);
}
 
export {addName, addName2}