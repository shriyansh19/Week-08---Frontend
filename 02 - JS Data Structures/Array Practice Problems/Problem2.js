// Problem 2: Extend the Above Program to Sort the Array and Find 2nd Largest and 2nd Smallest

// Step 1: Generate 10 random 3-digit numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    // Generate a random number between 100 and 999
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    randomNumbers.push(randomNumber);
}

console.log("Generated Random Numbers:", randomNumbers);

// Step 2: Find the 2nd largest and 2nd smallest without sorting
let max1 = -Infinity, max2 = -Infinity; // Variables to track largest and second largest
let min1 = Infinity, min2 = Infinity;   // Variables to track smallest and second smallest

for (let num of randomNumbers) {
    // Update max1 and max2
    if (num > max1) {
        max2 = max1; // Shift current max1 to max2
        max1 = num;  // Update max1
    } else if (num > max2 && num !== max1) {
        max2 = num;  // Update max2 if num is between max1 and max2
    }

    // Update min1 and min2
    if (num < min1) {
        min2 = min1; // Shift current min1 to min2
        min1 = num;  // Update min1
    } else if (num < min2 && num !== min1) {
        min2 = num;  // Update min2 if num is between min1 and min2
    }
}

console.log("Second Largest:", max2);
console.log("Second Smallest:", min2);

// Step 3: Sort the array in ascending order
randomNumbers.sort((a, b) => a - b);

console.log("Sorted Array:", randomNumbers);

// Step 4: Find the 2nd smallest and 2nd largest from the sorted array
let secondSmallest = randomNumbers[1]; // 2nd smallest is at index 1
let secondLargest = randomNumbers[randomNumbers.length - 2]; // 2nd largest is at second last index

console.log("Second Smallest (from sorted array):", secondSmallest);
console.log("Second Largest (from sorted array):", secondLargest);