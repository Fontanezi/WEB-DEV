const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    const name = document.querySelector('.name');
    const body = document.querySelector('body');
    const n1 = Math.floor(Math.random()*256);
    const n2 = Math.floor(Math.random()*256);
    const n3 = Math.floor(Math.random()*256);
    name.innerText = `rgb(${n1}, ${n2}, ${n3})`;
    body.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`;
    if (n1 === 0 && n2 === 0 && n3 === 0){
        name.style.color = white;
    } else {
        name.style.color = black;
    }
});