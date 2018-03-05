var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function(event) {
    var userguess = event.key;
    var computerguess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Welcome: " + computerguess + userguess);
}

