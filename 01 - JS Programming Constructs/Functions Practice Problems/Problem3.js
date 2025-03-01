// Problem 3: Check if a Number Is Prime and Its Palindrome Is Also Prime

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false; // Numbers <= 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; // Divisible by another number
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(number) {
    let reversedNumber = 0;
    let originalNumber = number;

    while (number > 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return reversedNumber;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to check if a number is prime and its palindrome is also prime
function checkPrimeAndPalindrome(number) {
    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);

        let palindrome = getPalindrome(number);
        console.log(`The palindrome of ${number} is ${palindrome}.`);

        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is NOT a prime number.`);
        }
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

// Take user input
readline.question("Enter a number: ", (input) => {
    let number = parseInt(input);

    // Call the main function
    checkPrimeAndPalindrome(number);

    readline.close();
});