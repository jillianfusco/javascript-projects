// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded; 
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
     }

    discard() {
        this.discarded = true;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {

    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded);  
            }

    discardManual(currentYear) {
        let manualAge = currentYear - this.copyrightDate;
        if (manualAge > 5) {
            this.discard();
        }
    }
}
       
class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded);
    }

    discardNovel() {
        if (this.timesCheckedOut > 100) {
            this.discard();
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, false);

console.log(prideAndPrejudice);

let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, false);

console.log(shuttleManual);

// console.log(prideAndPrejudice instanceof Book);
// console.log(prideAndPrejudice instanceof Novel);
// console.log(prideAndPrejudice instanceof Manual);

// Code exercises 4 & 5 here:
shuttleManual.discardManual(2024);
console.log(shuttleManual);

prideAndPrejudice.checkout(5);
prideAndPrejudice.discardNovel();
console.log(prideAndPrejudice);
console.log("________________________")
prideAndPrejudice.checkout(100);
prideAndPrejudice.discard();
console.log(prideAndPrejudice)