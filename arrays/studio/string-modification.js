const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.split("");
console.log(`newString: ${newString}`);
let modifiedString = newString.slice(3).join("") + newString.slice(0,3).join("");


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String: ${str}\nModiefied String: ${modifiedString}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numLetters = input.question("Enter the number of letters to relocate: ");
modifiedString = newString.slice(numLetters).join("") + newString.slice(0,numLetters).join("");
console.log(`Your new string is: ${modifiedString}`)
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetters > newString.length) {
    numLetters = 3
    console.log(`Sorry, the number you entered exceeds the number of charcters (${newString.length})`)
}