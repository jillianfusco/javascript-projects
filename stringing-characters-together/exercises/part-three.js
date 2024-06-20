//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));


//2. Without using slice(), use method chaining to accomplish the same thing.
let result = language[0] + language[4]; 
console.log(result)
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for JavaScript is ${result}`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let fun = language.charAt(0).concat(language.charAt(4)).toLowerCase();

console.log(`fun = ${fun}`)
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCaseUpper = notTitleCase.toUpperCase()
console.log(titleCaseUpper)
let character1 = titleCaseUpper.charAt(0)
let character2 = titleCaseUpper.charAt(6)
console.log(character1 + character2)
let titleCase = character1 
                + notTitleCase.charAt(1) 
                + notTitleCase.charAt(2)
                + notTitleCase.charAt(3)
                + notTitleCase.charAt(4)
                + notTitleCase.charAt(5)
                + character2
                + notTitleCase.charAt(7)
                + notTitleCase.charAt(8)
                + notTitleCase.charAt(9)
console.log(titleCase)