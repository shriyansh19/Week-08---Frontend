// Problem 2: Read a Number and Display the Weekday (Sunday, Monday,...) Using switch-case

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take input from the user
readline.question("Enter a number (1-7) to represent the day of the week: ", (input) => {
    let dayNumber = parseInt(input);

    // Display the corresponding weekday using switch-case
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Input: Please enter a number between 1 and 7.");
    }

    readline.close();
});