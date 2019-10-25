const readlineSync = require("readline-sync");

const INCHES_TO_CM = 2.54;

let widthIn = Number(readlineSync.question("\nWidth: "));
let lengthIn = Number(readlineSync.question("Length: "));

let widthCm = widthIn * INCHES_TO_CM;
let lengthCm = lengthIn * INCHES_TO_CM;
let perimeter = (2 * lengthCm) + (2 * widthCm);
perimeter = Math.round(100*perimeter)/(100);
finalPerimeter = perimeter.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nA(n) " + widthIn + "-by-" + lengthIn + "-inch sheet of paper has a perimeter of " + (finalPerimeter) + " centimeter(s).\n");
