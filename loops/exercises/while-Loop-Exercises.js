//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuel = 0
let astronautsAboard = 0
let shuttleAltitudeKm = 0

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuel = input.question("Enter starting fuel level: ")

while (startingFuel < 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
  startingFuel = input.question(`Invalid input. Please enter a number between 5,000 and 30,000: `)
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  astronautsAboard = input.question("How many astronauts are aboard? ")

  while (astronautsAboard <= 0 || astronautsAboard > 7) {
    astronautsAboard = input.question(`Invalid input. Please enter a number between 1 and 7: `)
  }
 
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuel-100*astronautsAboard >= 0) {
  shuttleAltitudeKm += 50;
  startingFuel -= 100*astronautsAboard
}

console.log(`--------------------------------`)
console.log(`Fuel level: ${startingFuel}`)
console.log(`Astronauts aboard: ${astronautsAboard}`)
console.log(`Shuttle gained an altitude of: ${shuttleAltitudeKm} KM`)

if (shuttleAltitudeKm >= 2000) {
  console.log("Orbit acheived!")
} else {
  console.log("Failed to reach orbit.")
}
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
