// Problem 2: Find the Magic Number

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    let low = 1;
    let high = 100;

    console.log("Think of a number between 1 and 100.");

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Ask the user if the number is less than, greater than, or equal to mid
        readline.question(`Is your number less than ${mid}? (yes/no): `, (answer) => {
            if (answer.toLowerCase() === "yes") {
                high = mid - 1; // Narrow the range to lower half
            } else {
                readline.question(`Is your number greater than ${mid}? (yes/no): `, (greaterAnswer) => {
                    if (greaterAnswer.toLowerCase() === "yes") {
                        low = mid + 1; // Narrow the range to upper half
                    } else {
                        console.log(`The magic number is ${mid}!`);
                        readline.close();
                        return;
                    }
                });
            }
        });
    }
}

findMagicNumber();