// Problem 2: Compute the nth Harmonic Number

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take user input for n
readline.question("Enter the value of n: ", (input) => {
    let n = parseInt(input);
    let harmonicNumber = 0;

    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }

    console.log(`The ${n}th Harmonic Number is: ${harmonicNumber.toFixed(4)}`);

    readline.close();
});