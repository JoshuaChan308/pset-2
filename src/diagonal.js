const readlineSync = require("readline-sync");

let widthIn = Number(readlineSync.question("\nWidth: "));
let lengthIn = Number(readlineSync.question("Length: "));

let diag = Math.sqrt((lengthIn*lengthIn)+(widthIn*widthIn))
diag = Math.round(100*diag)/(100);
finalDiag = diag.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("\nA(n) " + widthIn + "-by-" + lengthIn + "-inch sheet of paper has a diagonal of " + (finalDiag) + " inch(es).\n");
