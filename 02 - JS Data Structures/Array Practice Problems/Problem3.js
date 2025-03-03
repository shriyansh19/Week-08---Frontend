// Problem 3: Prime Factorization Program to Store All Prime Factors in an Array

function getPrimeFactors(n) {
    let primeFactors = [];

    // Check for the number of 2s that divide n
    while (n % 2 === 0) {
        primeFactors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            primeFactors.push(i);
            n = n / i;
        }
    }

    // If n is still greater than 2, then it must be a prime number
    if (n > 2) {
        primeFactors.push(n);
    }

    return primeFactors;
}

// Example usage
let number = 56; // Change this number to test other values
let factors = getPrimeFactors(number);
console.log(`Prime Factors of ${number}:`, factors);