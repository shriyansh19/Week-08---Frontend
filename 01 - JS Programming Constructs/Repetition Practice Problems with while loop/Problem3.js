// Problem 3: Extend the Flip Coin Problem Until Heads or Tails Wins 11 Times

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function flipCoinUntilWin() {
    let headsCount = 0;
    let tailsCount = 0;

    console.log("Flipping the coin...");

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random(); // Generate a random number between 0 and 1
        if (flip < 0.5) {
            headsCount++;
            console.log(`Heads! Total Heads: ${headsCount}, Total Tails: ${tailsCount}`);
        } else {
            tailsCount++;
            console.log(`Tails! Total Heads: ${headsCount}, Total Tails: ${tailsCount}`);
        }
    }

    if (headsCount === 11) {
        console.log("Heads wins!");
    } else {
        console.log("Tails wins!");
    }

    readline.close();
}

flipCoinUntilWin();