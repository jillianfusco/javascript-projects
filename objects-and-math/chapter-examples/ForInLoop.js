let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919
};

tortoiseTwo.name = "Sneaky";
tortoiseTwo.age = 134;
tortoiseTwo.speed = "Megafast";


// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

// for (item in giraffe) {
//    console.log(item + ", " + giraffe[item]);
// }

for (item in tortoiseOne) {
   console.log(`${item}- ${tortoiseOne[item]}`)
}
// let num = Math.floor(Math.random()*10 + 1);

// console.log(num);
