// Problem 4: Enter 3 Numbers and Perform Arithmetic Operations to Find Maximum and Minimum


const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let c = parseFloat(prompt("Enter the third number: "));

let results = [
    a + b * c,
    a % b + c,
    c + a / b,
    a * b + c
];

console.log("\nResults:");
results.forEach((res, i) => console.log(`Result ${i + 1}: ${res}`));

console.log(`\nMaximum Result: ${Math.max(...results)}`);
console.log(`Minimum Result: ${Math.min(...results)}`);
