const input = require('readline-sync');

let name = input.question("Enter your name: ");
let otherName = input.question("Enter other name: ");

console.log("Hello, " + name + "!");
console.log("First name: " + name);
console.log("Last Name: " + otherName);
console.log("Last, First: " + otherName + ", " + name);