// Instructions can be found in functions.md
// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript
var people = ["Harry", "Hermione", "Ron"];
function logPerson(person) {
    console.log("The person is " + person);
}
people.forEach(logPerson);
// Function in a Variable
// Store the logPerson() function in a variable called performLogPerson
// Your code here
var performLogPerson = function logPerson(person) { console.log("The person is " + person); };
// Arrow Functions in a Variable
// Write a version of logPerson() as an Arrow Function and store it in a variable called arrowVersionOfLogPerson
// Your code here
var arrowVersionOfLogPerson = function (person) { console.log("The person is " + person); };
// Anonymous Arrow Functions
// Replace logPerson below with an Anonymous Arrow Function that does the same thing!
people.forEach(function (person) { console.log("The person is " + person); });
// In JavaScript there are lots of ways to write functions. There is no right or wrong way, but arrow functions are the most modern. 🙂
