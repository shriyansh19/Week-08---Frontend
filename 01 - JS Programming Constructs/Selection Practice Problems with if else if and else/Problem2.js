// Problem 2: Read a Number and Display the Weekday (Sunday, Monday,...)

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number (1-7) to represent the day of the week: ", (input) => {
    let dayNumber = parseInt(input);

    if (dayNumber === 1) {
        console.log("Sunday");
    } else if (dayNumber === 2) {
        console.log("Monday");
    } else if (dayNumber === 3) {
        console.log("Tuesday");
    } else if (dayNumber === 4) {
        console.log("Wednesday");
    } else if (dayNumber === 5) {
        console.log("Thursday");
    } else if (dayNumber === 6) {
        console.log("Friday");
    } else if (dayNumber === 7) {
        console.log("Saturday");
    } else {
        console.log("Invalid Input: Please enter a number between 1 and 7.");
    }

    readline.close();
});