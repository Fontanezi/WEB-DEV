const form = document.querySelector('#form');

const input = document.querySelector('#input');

const list = document.querySelector('#list');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const newLI = document.createElement('li');
    newLI.innerText = input.value;
    list.append(newLI);
    input.value = "";
})