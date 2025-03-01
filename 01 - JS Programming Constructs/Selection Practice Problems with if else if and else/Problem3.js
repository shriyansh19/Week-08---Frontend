// Problem 3: Read a Number (1, 10, 100, 1000, etc.) and Display Unit, Ten, Hundred,...

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1, 10, 100, 1000, etc.): ", (input) => {
    let number = parseInt(input);

    if (number === 1) {
        console.log("Unit");
    } else if (number === 10) {
        console.log("Ten");
    } else if (number === 100) {
        console.log("Hundred");
    } else if (number === 1000) {
        console.log("Thousand");
    } else if (number === 10000) {
        console.log("Ten Thousand");
    } else if (number === 100000) {
        console.log("Lakh");
    } else {
        console.log("Invalid Input: Please enter a valid power of 10.");
    }

    readline.close();
});