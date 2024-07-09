const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// let isEven = function(n) {
//   return Number(n) % 2 === 0;
// };

// console.log(getValidInput('Enter an even number:', isEven));

// TODO 1: write a validator 
// that ensures input starts with "a"

let startsWithA = function(word) {
  return word[0].toLowerCase() === "a"
}

// console.log(getValidInput(`Enter a word that starts with "A": `, startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel

let isAVowel = function(word) {
  return word.toLowerCase() === "a" 
  || word.toLowerCase() === "e" 
  || word.toLowerCase() === "i" 
  || word.toLowerCase() === "o" 
  || word.toLowerCase() === "u" 
  || word.toLowerCase() === "y"; 
}

console.log(getValidInput(`Enter a vowel: `, isAVowel));
// Be sure to test your code!
