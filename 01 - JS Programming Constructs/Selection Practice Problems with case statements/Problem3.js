// Problem 3: Read a Number (1, 10, 100, 1000, etc.) and Display Unit, Ten, Hundred,...

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take input from the user
readline.question("Enter a number (1, 10, 100, 1000, etc.): ", (input) => {
    let number = parseInt(input);

    // Display the place value using switch-case
    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        case 100000:
            console.log("Lakh");
            break;
        default:
            console.log("Invalid Input: Please enter a valid power of 10.");
    }

    readline.close();
});