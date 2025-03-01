// Problem 1: Convert Temperature Between °C and °F

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert temperature
function convertTemperature(temp, unit) {
    switch (unit) {
        case "C": // Celsius to Fahrenheit
            if (temp >= 0 && temp <= 100) { // Ensure within freezing and boiling points
                let degF = (temp * 9 / 5) + 32;
                console.log(`${temp}°C = ${degF.toFixed(2)}°F`);
            } else {
                console.log("Invalid Input: Temperature must be between 0°C and 100°C.");
            }
            break;

        case "F": // Fahrenheit to Celsius
            if (temp >= 32 && temp <= 212) { // Ensure within freezing and boiling points
                let degC = (temp - 32) * 5 / 9;
                console.log(`${temp}°F = ${degC.toFixed(2)}°C`);
            } else {
                console.log("Invalid Input: Temperature must be between 32°F and 212°F.");
            }
            break;

        default:
            console.log("Invalid Unit: Please choose 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

// Take user input
readline.question("Enter the temperature: ", (tempInput) => {
    let temp = parseFloat(tempInput);

    readline.question("Enter the unit (C for Celsius, F for Fahrenheit): ", (unitInput) => {
        let unit = unitInput.toUpperCase(); // Normalize input

        // Call the conversion function
        convertTemperature(temp, unit);

        readline.close();
    });
});