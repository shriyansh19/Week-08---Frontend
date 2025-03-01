// Problem 1: Read a Single Digit Number and Write the Number in Words

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a single-digit number (0-9): ", (input) => {
    let number = parseInt(input);

    if (number === 0) {
        console.log("Zero");
    } else if (number === 1) {
        console.log("One");
    } else if (number === 2) {
        console.log("Two");
    } else if (number === 3) {
        console.log("Three");
    } else if (number === 4) {
        console.log("Four");
    } else if (number === 5) {
        console.log("Five");
    } else if (number === 6) {
        console.log("Six");
    } else if (number === 7) {
        console.log("Seven");
    } else if (number === 8) {
        console.log("Eight");
    } else if (number === 9) {
        console.log("Nine");
    } else {
        console.log("Invalid Input: Please enter a single-digit number.");
    }

    readline.close();
});