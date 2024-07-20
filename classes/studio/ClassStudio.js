//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {

    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore)
    } 

    averageScore(){
        let sum = 0
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        const avg = sum/this.scores.length;
        return Math.round(avg * 10)/10;
    }

    status () {
        const averagedScore = this.averageScore();
        if (averagedScore >= 90){
            console.log(`${this.name} earned an average test score of ${averagedScore} and has a status of Accepted.`)
        } else if (averagedScore >= 80 && averagedScore <= 89.9) {
            console.log(`${this.name} earned an average test score of ${averagedScore} and has a status of Reserve.`)
        } else if (averagedScore >= 70 && averagedScore <= 79.9) {
            console.log(`${this.name} earned an average test score of ${averagedScore} and has a status of Probationary.`)
        } else {
            console.log(`${this.name} earned an average test score of ${averagedScore} and has a status of Rejected.`)
        }
    }
}

let bubbbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// console.log(bubbbaBear);
// console.log(merryMaltese);
// console.log(gladGator);


//Part 2 & 3- Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// bubbbaBear.addScore(83);
// console.log(bubbbaBear);

console.log(bubbbaBear.averageScore())
bubbbaBear.status();

// console.log(merryMaltese.averageScore());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
