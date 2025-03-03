// Problem 5: Find Digits Repeated Twice in the Range 0-100

function findRepeatedDigits() {
    let repeatedDigits = [];

    // Iterate through numbers from 0 to 100
    for (let num = 0; num <= 100; num++) {
        let digits = num.toString().split(""); // Convert number to string and split into digits

        // Check if both digits are the same and the number has exactly two digits
        if (digits.length === 2 && digits[0] === digits[1]) {
            repeatedDigits.push(num);
        }
    }

    return repeatedDigits;
}

// Example usage
let repeated = findRepeatedDigits();
console.log("Numbers with repeated digits (0-100):", repeated);