// global variables

var win = 0;
console.log ("wins = " + win);
var lose = 0;
console.log ("loses = " + lose);
var guessesLeft = 9;
console.log ("guesses left = " + guessesLeft);
var guesses = [];
var userChoice = "";
var appChoice = "";

var userGuesses = document.getElementById("#guesses");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// app randomly picks random letter

function psychic () {
  guessesLeft = 9;
  guesses = [];
  appChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("psychic thinks of = " + appChoice);
}
alert ("Try to guess what letter the psychic is thinking!");
psychic ();

// user keys character

document.onkeyup = function(event) {
  userChoice = event.key.toLowerCase();
  console.log(userChoice);

  //if appChoice = userChoice: win, 
  //increase wins, 
  if (!/[a-z]/.test(userChoice)){
		alert ("please choose a letter");
  } else if (userChoice === "meta") {
    alert ("Try to guess what letter the psychic is thinking!");
  } else if (appChoice === userChoice) {
    alert("Correct! You are such a good guesser");
    win++;
    //restart
    psychic ();
  } else if (guessesLeft === 1) {
    //else: lose, 
    guessesLeft--;
    alert("You lose! Try again.");
    lose++;
    //restart game
    psychic();
  } else {
    //decrease guesses left, 
    guessesLeft--;
    console.log("guesses left = " + guessesLeft);
    guesses.push(userChoice);

  }

  // Send variables to html
  document.querySelector("#win").innerHTML = "Wins : " + win;
  document.querySelector("#lose").innerHTML = "Losses : " + lose;
  document.querySelector("#guessesLeft").innerHTML = "Guesses left : " + guessesLeft;
  document.querySelector("#guesses").innerHTML = "Your guesses so far : " + guesses ;
}