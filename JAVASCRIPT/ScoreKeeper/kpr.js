const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
let plays = document.querySelector('#plays');
let p1ScoreValue = parseInt(document.querySelector('.p1Score').innerText);
let p2ScoreValue = parseInt(document.querySelector('.p2Score').innerText);
let p1Score = document.querySelector('.p1Score');
let p2Score = document.querySelector('.p2Score')

p1.addEventListener('click', function () {
    p1ScoreValue++;
    p1Score.innerText = p1ScoreValue;
    if (p1ScoreValue === parseInt(plays.value)) {
        p1.disabled = true;
        p2.disabled = true;
        p1Score.style.color = "#48c78e";
        p2Score.style.color = "#f14668";
    }
})

p2.addEventListener('click', function () {
    p2ScoreValue++;
    p2Score.innerText = p2ScoreValue;
    if (p2ScoreValue === parseInt(plays.value)) {
        p1.disabled = true;
        p2.disabled = true;
        p1Score.style.color = "#f14668";
        p2Score.style.color = "#48c78e";
    }
})

reset.addEventListener('click', function () {
    p1ScoreValue = 0;
    p2ScoreValue = 0;
    p1Score.innerText = p1ScoreValue;
    p2Score.innerText = p2ScoreValue;
    p1.disabled = false;
    p2.disabled = false;
    p1Score.style.color = "#4a4a4a";
    p2Score.style.color = "#4a4a4a";
})


