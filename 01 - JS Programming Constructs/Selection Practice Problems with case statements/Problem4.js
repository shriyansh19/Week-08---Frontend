// Problem 4: Write a Program That Takes User Inputs and Does Unit Conversion of Different Length Units

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take input for the type of conversion
readline.question("Choose a conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n", (choiceInput) => {
    let choice = parseInt(choiceInput);

    // Take the value to be converted
    readline.question("Enter the value to convert: ", (valueInput) => {
        let value = parseFloat(valueInput);

        // Perform the conversion using switch-case
        switch (choice) {
            case 1: // Feet to Inch
                let inches = value * 12;
                console.log(`${value} feet = ${inches} inches`);
                break;
            case 2: // Feet to Meter
                let meters = value * 0.3048;
                console.log(`${value} feet = ${meters.toFixed(2)} meters`);
                break;
            case 3: // Inch to Feet
                let feet = value / 12;
                console.log(`${value} inches = ${feet.toFixed(2)} feet`);
                break;
            case 4: // Meter to Feet
                let feetFromMeters = value / 0.3048;
                console.log(`${value} meters = ${feetFromMeters.toFixed(2)} feet`);
                break;
            default:
                console.log("Invalid Choice: Please select a valid option (1-4).");
        }

        readline.close();
    });
});