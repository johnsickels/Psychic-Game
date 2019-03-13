// wins = 0
var win = 0
// loses = 0
var lose = 0
// guesses left = 9
var guessesLeft = 9
// characters available
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// characters guessed
var guesses = []


// app randomly picks random letter
var appChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(appChoice);
// user keys character
document.onkeyup = function(event) {
  userChoice = event.key.toLowerCase();
  console.log(userChoice);

  //if appChoice = userChoice: win, 
  //increase wins, 
  //restart game
  if (appChoice === userChoice) {
    alert("Correct! You are such a good guesser");
    win++;
    //restart
  } else {
    lose--;
    // restart
    //else: lose, 
  //return character to guesses so far, 
  //decrease guesses left, 
  //restart game
  }
}