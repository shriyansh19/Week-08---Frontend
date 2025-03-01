// Problem 2: Check if Two Numbers Are Palindromes

// Function to check if a number is a palindrome
function isPalindrome(number) {
    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

// Take user input
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the first number: ", (num1Input) => {
    let num1 = parseInt(num1Input);

    readline.question("Enter the second number: ", (num2Input) => {
        let num2 = parseInt(num2Input);

        // Check if both numbers are palindromes
        if (isPalindrome(num1) && isPalindrome(num2)) {
            console.log(`${num1} and ${num2} are both palindromes.`);
        } else {
            console.log(`${num1} and ${num2} are NOT both palindromes.`);
        }

        readline.close();
    });
});