// Problem 4: Simulate a Coin Flip and Print "Heads" or "Tails"


// Simulate a coin flip (0 for Heads, 1 for Tails)
let coinFlip = Math.floor(Math.random() * 2); // Generates either 0 or 1

// Determine the result
if (coinFlip === 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}