// Problem 1: Print a Table of Powers of 2

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take user input for n
readline.question("Enter the value of n: ", (input) => {
    let n = parseInt(input);

    console.log("Powers of 2:");
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }

    readline.close();
});