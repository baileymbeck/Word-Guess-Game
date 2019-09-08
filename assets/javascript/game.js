var guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

var word = ["algebraic", "plops", "tough baby"];

var wins = 0;
var left = 20;
var guesses = "";



document.onkeyup = function(event) {
    var guesses = event.key;
    
    if(guesses === word.length){
    

    } else if (guesses !== word.length){
        left--;
        
    }
    
    if(left === 0){
        ;
    }

};