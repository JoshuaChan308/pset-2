const readlineSync = require("readline-sync");

const Inches_to_mm = 25.4;
let Width_in = Number(readlineSync.question("\nWidth: "));
let Length_in = Number(readlineSync.question("Length: "));

let Width_mm = Width_in * Inches_to_mm;
let Length_mm = Length_in * Inches_to_mm;
let Area = Width_mm * Length_mm;
Area = Math.round(100*Area)/(100);
Finalarea = Area.toLocaleString ();

console.log("\nA(n) " + Width_in + "-by-" + Length_in + "-inch sheet of paper has an area of " + (Finalarea) + " square millimeter(s).\n" );
