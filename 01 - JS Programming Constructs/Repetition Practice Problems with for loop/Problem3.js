// Problem 3: Check if a Number Is Prime

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false; // Numbers <= 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; // Divisible by another number
    }
    return true;
}

// Take user input
readline.question("Enter a number: ", (input) => {
    let number = parseInt(input);

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }

    readline.close();
});