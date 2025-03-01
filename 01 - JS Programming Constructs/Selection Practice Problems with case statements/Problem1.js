// Problem 1: Read a Single Digit Number and Write the Number in Words Using switch-case

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take input from the user
readline.question("Enter a single-digit number (0-9): ", (input) => {
    let number = parseInt(input);

    // Convert the number to words using switch-case
    switch (number) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Invalid Input: Please enter a single-digit number.");
    }

    readline.close();
});