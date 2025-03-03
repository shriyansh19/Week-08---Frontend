// Problem 1: Roll a Die Until One Number Reaches 10 Times

// Step 1: Initialize a map to store the count of each die roll result
let dieCounts = new Map();

// Step 2: Roll the die until one number reaches 10 times
while (true) {
    // Generate a random number between 1 and 6 (inclusive)
    let roll = Math.floor(Math.random() * 6) + 1;

    // Update the count in the map
    if (dieCounts.has(roll)) {
        dieCounts.set(roll, dieCounts.get(roll) + 1);
    } else {
        dieCounts.set(roll, 1);
    }

    // Check if any number has reached 10 times
    if (dieCounts.get(roll) === 10) {
        break;
    }
}

console.log("Die Roll Counts:", dieCounts);

// Step 3: Find the number that reached maximum and minimum times
let maxCount = -Infinity, minCount = Infinity;
let maxNumber = null, minNumber = null;

for (let [number, count] of dieCounts.entries()) {
    if (count > maxCount) {
        maxCount = count;
        maxNumber = number;
    }
    if (count < minCount) {
        minCount = count;
        minNumber = number;
    }
}

console.log(`Number with Maximum Rolls (${maxCount} times):`, maxNumber);
console.log(`Number with Minimum Rolls (${minCount} times):`, minNumber);