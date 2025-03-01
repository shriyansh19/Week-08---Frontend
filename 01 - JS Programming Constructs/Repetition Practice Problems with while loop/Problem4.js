// Problem 4: Gambler Simulation

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function simulateGambler() {
    let money = 100; // Starting money
    let goal = 200; // Goal amount
    let bets = 0; // Total bets made
    let wins = 0; // Total wins

    console.log("Starting simulation...");

    while (money > 0 && money < goal) {
        bets++; // Increment total bets
        let betResult = Math.random(); // Simulate a bet (0 for loss, 1 for win)

        if (betResult < 0.5) {
            money--; // Lose Re 1
        } else {
            money++; // Win Re 1
            wins++; // Increment wins
        }

        console.log(`Current Money: Rs ${money}`);
    }

    if (money === 0) {
        console.log("The gambler has gone broke.");
    } else {
        console.log("The gambler has reached the goal of Rs 200!");
    }

    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);

    readline.close();
}

simulateGambler();