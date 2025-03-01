// Problem 1: Read 5 Random 3-Digit Values and Output Minimum and Maximum

// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100; // Generates numbers between 100 and 999
    numbers.push(randomNumber);
}

console.log("Generated Numbers:", numbers);

// Find minimum and maximum values
let min = numbers[0];
let max = numbers[0];

for (let num of numbers) {
    if (num < min) {
        min = num; // Update minimum
    }
    if (num > max) {
        max = num; // Update maximum
    }
}

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);