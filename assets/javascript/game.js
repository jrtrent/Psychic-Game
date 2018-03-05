var wins = 0;
var losses = 0;
var guessesleft = 10;
var guessesfar = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function(event) {
    var userguess = event.key;
    var computerguess = letters[Math.floor(Math.random() * letters.length)];
   
    if ((userguess === computerguess)) {
        wins++;
    } else {
        losses++;
        guessesleft--;

    var guessesfar = wins + losses;
    }

   
    var html =
    "<p> Wins: " + wins + "</p>" +
    "<p> Loses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesleft + "</p>" +
    "<p> Your Guesses so far: " + guessesfar + "</p>" ;


    if ((guessesleft === -1 )){
        document.querySelector("#game").reset ();
       } else {document.querySelector("#game").innerHTML = html;
    }

 
}


