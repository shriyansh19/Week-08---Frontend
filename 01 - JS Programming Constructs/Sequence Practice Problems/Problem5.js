// a. 1ft = 12 in then 42 in = ? ft

// Convert inches to feet
let inches = 42;
let feet = inches / 12;

console.log(`${inches} inches = ${feet} feet`);

// ___________________________________________________________________________________________________________________________________

// b. Rectangular Plot of 60 feet x 40 feet in meters

// Conversion factor: 1 foot = 0.3048 meters
let lengthInFeet = 60;
let widthInFeet = 40;

// Convert dimensions to meters
let lengthInMeters = lengthInFeet * 0.3048;
let widthInMeters = widthInFeet * 0.3048;

// Calculate area in square meters
let areaInSquareMeters = lengthInMeters * widthInMeters;

console.log(`Rectangular Plot Area: ${areaInSquareMeters.toFixed(2)} square meters`);

// ___________________________________________________________________________________________________________________________________


// c. Calculate area of 25 such plots in acres

// Conversion factor: 1 acre = 4046.86 square meters
let numberOfPlots = 25;

// Total area of 25 plots in square meters
let totalAreaInSquareMeters = areaInSquareMeters * numberOfPlots;

// Convert total area to acres
let totalAreaInAcres = totalAreaInSquareMeters / 4046.86;

console.log(`Total Area of 25 Plots: ${totalAreaInAcres.toFixed(2)} acres`);