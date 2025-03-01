// Problem 3: Check if a Year Is a Leap Year

// Input year (you can replace this with user input or command-line arguments)
let year = 2024; // Example year

// Check if the year is a leap year
if (year >= 1000 && year <= 9999) { // Ensure it's a 4-digit number
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year.`);
    } else {
        console.log(`${year} is NOT a Leap Year.`);
    }
} else {
    console.log("Invalid Year: Please enter a 4-digit number.");
}