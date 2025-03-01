// Problem 4: Use Script & Debug – Write a program that reads 5 Random 2-Digit values, then find their sum and the average

// Initialize an array to store 5 random 2-digit numbers
let randomNumbers = [];

// Generate 5 random 2-digit numbers
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 90) + 10; // Generates numbers between 10 and 99
    randomNumbers.push(randomNumber);
}

// Calculate the sum of the numbers
let sum = randomNumbers.reduce((acc, num) => acc + num, 0);

// Calculate the average of the numbers
let average = sum / randomNumbers.length;

// Print the results
console.log("Generated Random Numbers:", randomNumbers);
console.log("Sum of Numbers:", sum);
console.log("Average of Numbers:", average);