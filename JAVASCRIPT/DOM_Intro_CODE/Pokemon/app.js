const container = document.querySelector('#container');
for (let i = 1; i < 1009; i++) {
    let pokemon = document.createElement('div');
    let label = document.createElement('span')
    label.innerText = `#${i}`;
    let poke = document.createElement('img');
    poke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    pokemon.appendChild(poke);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
