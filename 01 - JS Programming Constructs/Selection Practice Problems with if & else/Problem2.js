// Problem 2: Check if Day and Month Are Between March 20 and June 20

// Input day and month (you can replace these with user input or command-line arguments)
let day = 15; // Example day
let month = "April"; // Example month

// Convert month to lowercase for case-insensitive comparison
month = month.toLowerCase();

// Check if the date is between March 20 and June 20
if (
    (month === "march" && day >= 20 && day <= 31) || 
    (month === "april" || month === "may") || 
    (month === "june" && day >= 1 && day <= 20)
) {
    console.log("True: The date is between March 20 and June 20.");
} else {
    console.log("False: The date is NOT between March 20 and June 20.");
}