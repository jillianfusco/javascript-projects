const checkFive = require("../checkFive.js");


describe("checkFive", function() {

    test("checks if number is less than 5", function() {
       let output = 2;
       expect(checkFive(output)).toEqual("2 is less than 5.");
    });

    test("checks if number is greater than 5", function() {
        let output = 6;
        expect(checkFive(output)).toEqual("6 is greater than 5.");
    });

    test("checks if number is equal to 5", function() {
        let output = 5;
        expect(checkFive(output)).toEqual("5 is equal to 5.");
    });
});