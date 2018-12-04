var randomLetter = getRandomLetter();
var guess;
var guessCount = 0;
var correcGuess = false;

function getRandomLetter(_upper) {
    var letter = Math.floor(Math.random()*_upper) + 1;
    return letter;
}
while(true){
    guess = document.getElementById("h1".innerHTML = "I am thinking of a Letter. Can you Guess it?");
    guessCount += 1;
    if (parseInt(guess) ===randomLetter){
        corectGuess = true;
        break;
    }
}
document.write("<h1>You guess the Letter!</h1>");
document.write("It took you" + guessCount + "tries to guess the letter" +
    randomLetter);