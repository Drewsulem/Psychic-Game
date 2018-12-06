var wins = 0;
var losses = 0;
var attempts = 0;
var array = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function Guess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

document.onkeyup = function (event) {
      var playerGuess = event.key;

      if (playerGuess === ranLetter) {
            wins++;
            attempts = 9;
            array = [];

      }

     
      Guess();
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      if (attempts == 0) {
            losses++;
            array = []
            attempts = 9;
      }

      if (array.indexOf(playerGuess) >= 0) {

      } else {
            array.push(playerGuess);
            document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + array;
            console.log(array);

      }
      document.getElementById("wins").innerHTML = "Wins: "+ wins;
      document.getElementById("losses").innerHTML = "Losses: "+ losses;
      document.getElementById("attempts").innerHTML ="Guesses Left: " + attempts;
    }
