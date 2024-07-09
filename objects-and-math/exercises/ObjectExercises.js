let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6, 
   move : function () {
      let randomNumber = Math.floor(Math.random()*11);
      console.log(`${this.name} moved ${randomNumber} steps`);
   },
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5, 
   move : function () {
      let randomNumber = Math.floor(Math.random()*11);
      console.log(`${this.name} moved ${randomNumber} steps`);
   },
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move : function () {
      let randomNumber = Math.floor(Math.random()*11);
      console.log(`${this.name} moved ${randomNumber} steps`);
   },
};

let canine = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move : function () {
      let randomNumber = Math.floor(Math.random()*11);
      console.log(`${this.name} moved ${randomNumber} steps`);
   },
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move : function () {
      let randomNumber = Math.floor(Math.random()*11);
      console.log(`${this.name} moved ${randomNumber} steps`);
   },
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne.astronautID = 1;
// console.log(superChimpOne);
salamander.astronautID = 2;
// console.log(salamander);
superChimpTwo.astronautID = 3;
// console.log(superChimpTwo);
canine.astronautID = 4;
// console.log(canine);
tardigrade.astronautID = 5;
// console.log(tardigrade);

// Add a move method to each animal object

function moveAnimal() {
   let randomNumber = Math.round(Math.random()*10);
   console.log(`${this.name} moved ${randomNumber} steps`);
   return randomNumber;
}

// superChimpOne.move();


// function randomSelection(arr){
//    let index = Math.floor(Math.random()*arr.length);
//    return arr[index];
//  }

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, canine, tardigrade]

// Print out the relevant information about each animal.

function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}

// crewReports(superChimpOne);
// crewReports(salamander);
// crewReports(superChimpTwo);

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}

fitnessTest(crew)