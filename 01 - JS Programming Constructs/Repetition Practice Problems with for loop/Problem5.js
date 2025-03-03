// Problem 5: Compute Factorial of a Number

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take user input for n
readline.question("Enter a number: ", (input) => {
    let n = parseInt(input);
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(`Factorial of ${n} is: ${factorial}`);

    readline.close();
});