// Problem 6: Compute Factors of a Number Using Prime Factorization

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors
function getPrimeFactors(n) {
    let factors = [];

    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is still greater than 2, it must be a prime factor
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Take user input for n
readline.question("Enter a number: ", (input) => {
    let n = parseInt(input);

    let primeFactors = getPrimeFactors(n);

    console.log(`Prime factors of ${n}: ${primeFactors.join(", ")}`);

    readline.close();
});