// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test(" has a key called 'organization' that has a value of 'nonprofit'", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("has a key called 'executiveDirector' that has a value of 'Jeff'", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("has a key called 'percentageCoolEmployees' that has a value of 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual("100");
  });

  test("check that programsOffered has three items", function() {
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test("checks that programsOffered contains 'Web Development'", function() {
    expect(launchcode.programsOffered.includes("Web Development")).toEqual(true);
  });

  test("check that programsOffered contains Data Analysis", function() {
    expect(launchcode.programsOffered.includes("Data Analysis")).toEqual(true);
  });

  test("check that programsOffered contains Liftoff", function() {
    expect(launchcode.programsOffered.includes("Liftoff")).toEqual(true);
  });

  test("check that launchOutput returns 'Launch!' when given an even number", function() {
    expect(launchcode.launchOutput(2)).toEqual('Launch!');
  });

  test("Check that launchOutput returns 'Code!' when given multiple of three", function() {
    expect(launchcode.launchOutput(3)).toEqual('Code!');
  });

  test("Check that launchOutput returns 'Rocks!' when given multiple of five", function() {
    expect(launchcode.launchOutput(5)).toEqual('Rocks!');
  });

  test("Check that launchOutput returns 'LaunchCode!' when given multiple of two and three", function() {
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
  });

  test("Check that launchOutput returns 'Code Rocks!' when given multiple of three and five", function() {
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });

  test("Check that launchOutput returns 'Launch Rocks!' when given multiple of two and five", function() {
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks!');
  });

  test("Check that launchOutput returns 'LaunchCode Rocks!' when given number that is divisible by two, three, and five", function() {
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
  });

  test("Check that launchOutput returns 'Rutabagas! That doesn't work.' when given number that is NOT divisible by two, three, and five", function() {
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
  });
});

