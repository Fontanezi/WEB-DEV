alert('Hello, welcome to the number guessing game! Enter a number, and the game will generate a random number between 1 and your prompt. To quit the game, type "q" at any moment after inserting your max number');

let maxNum = parseInt(prompt("Enter your number:"));

while(!maxNum){
    maxNum = parseInt(prompt("Enter a valid number!"));
}
    const numAnswer = Math.floor(Math.random() * maxNum) + 1;

    let guess = prompt("Enter your first guess:");

    let attempts = 1;

    while (parseInt(guess) !== numAnswer) {
        if (guess === "q") break;
        attempts++;
        if (parseInt(guess) > numAnswer) {
            guess = prompt("Too high! Try again:");
        } else {
            guess = prompt("Too low! Try again:");
        }
    }
    if (guess === "q") {
        alert("Okay, quitting.");
    } else {
        alert(`You got it! The number was ${numAnswer}. It took you ${attempts} attempts to guess.`);
    }