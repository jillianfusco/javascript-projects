const whoWon = require("../RPS.js");

describe("whoWon function", function() {

    test("returns 'TIE!' if both players choose same option", function() {
        let output1 = "paper";
        let output2 = "paper";
        expect(whoWon(output1, output2)).toEqual("TIE!");
    });

    test("returns 'Player 2 wins!' if player1 chooses rock and player 2 chooses paper", function() {
        let player1 = "rock";
        let player2 = "paper";
        expect(whoWon(player1, player2)).toEqual("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if player1 chooses paper and player2 chooses scissors", function() {
        let player1= "paper";
        let player2 = "scissors";
        expect(whoWon(player1, player2)).toEqual("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if player1 chooses scissors and player2 chooses rock", function() {
        let player1= "scissors";
        let player2 = "rock";
        expect(whoWon(player1, player2)).toEqual("Player 2 wins!");
    });

});