const readlineSync = require("readline-sync");

const Hwweight = 0.15;
const Qweight = 0.35;
const Tweight = 0.5;
const Assignments = 3;

let Hw1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
let Hw2 = Number(readlineSync.question(""));
let Hw3 = Number(readlineSync.question(""));

let Q1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let Q2 = Number(readlineSync.question(""));
let Q3 = Number(readlineSync.question(""));

let T1 = Number(readlineSync.question("\nEnter three test grades.\n"));
let T2 = Number(readlineSync.question(""));
let T3 = Number(readlineSync.question(""));

let Finalhw = ((Hw1 + Hw2 + Hw3) / Assignments) * Hwweight;
let Finalq = ((Q1+ Q2 + Q3) / Assignments) * Qweight;
let Finalt = ((T1 + T2+ T3) / Assignments) * Tweight;

let Mpgrade = (Finalhw + Finalq + Finalt);
Mpgrade = Math.round(100*Mpgrade)/(100);
Finalmpgrade = Mpgrade.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nYour marking period grade is " + Finalmpgrade + "%.\n")
