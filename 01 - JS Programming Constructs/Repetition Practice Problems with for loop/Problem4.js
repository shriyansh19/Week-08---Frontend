// Problem 4: Find Prime Numbers in a Range

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

// Take user input for range
readline.question("Enter the start of the range: ", (startInput) => {
    let start = parseInt(startInput);

    readline.question("Enter the end of the range: ", (endInput) => {
        let end = parseInt(endInput);

        console.log(`Prime numbers between ${start} and ${end}:`);
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                console.log(i);
            }
        }

        readline.close();
    });
});