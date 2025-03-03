// Problem 2: Generate Birth Months for 50 Individuals and Group by Month

// Step 1: Generate birth months for 50 individuals
let individuals = [];
for (let i = 0; i < 50; i++) {
    // Generate a random month between 1 and 12 (inclusive)
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    individuals.push(birthMonth);
}

console.log("Generated Birth Months:", individuals);

// Step 2: Group individuals by their birth month using a map
let birthMonthMap = new Map();

for (let month of individuals) {
    if (birthMonthMap.has(month)) {
        birthMonthMap.get(month).push(month); // Add the individual to the list for this month
    } else {
        birthMonthMap.set(month, [month]); // Create a new list for this month
    }
}

console.log("Individuals Grouped by Birth Month:");
for (let [month, people] of birthMonthMap.entries()) {
    console.log(`Month ${month}: ${people.length} individuals`);
}