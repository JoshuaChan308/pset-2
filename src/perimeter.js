const readlineSync = require("readline-sync");

const Inches_to_cm = 2.54;

let Width_in = Number(readlineSync.question("\nWidth: "));
let Length_in = Number(readlineSync.question("Length: "));

let Width_cm = Width_in * Inches_to_cm;
let Length_cm = Length_in * Inches_to_cm;
let Perimeter = (2 * Length_cm) + (2 * Width_cm);
Perimeter = Math.round(100*Perimeter)/(100);
Finalperimeter = Perimeter.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nA(n) " + Width_in + "-by-" + Length_in + "-inch sheet of paper has a perimeter of " + (Finalperimeter) + " centimeter(s).\n");
