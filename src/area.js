const readlineSync = require("readline-sync");

const INCHES_TO_MM = 25.4;
let widthIn = Number(readlineSync.question("\nWidth: "));
let lengthIn = Number(readlineSync.question("Length: "));

let widthMm = widthIn * INCHES_TO_MM;
let lengthMm = lengthIn * INCHES_TO_MM;
let area = widthMm * lengthMm;
area = Math.round(100*area)/(100);
finalArea = area.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nA(n) " + widthIn + "-by-" + lengthIn + "-inch sheet of paper has an area of " + (finalArea) + " square millimeter(s).\n" );
