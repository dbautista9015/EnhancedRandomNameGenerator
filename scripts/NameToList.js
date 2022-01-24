export default function addName(name) {
    let injectListItemHere = document.getElementById('injectListItemHere');

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = name;

    injectListItemHere.appendChild(li);

}