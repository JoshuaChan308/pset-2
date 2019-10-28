const readlineSync = require("readline-sync");

const STUDENTS = (readlineSync.question("\nStudents: "));
const TEACHERS = (readlineSync.question("Teachers: "));
const BUS_CAPACITY = (readlineSync.question("Bus capacity: "));

let totalPeople = Number(STUDENTS) + Number(TEACHERS);

let busesNeeded = totalPeople / Number(BUS_CAPACITY);
let finalBusesNeeded = Math.trunc(busesNeeded) + 1;

let lastBus = totalPeople % Number(BUS_CAPACITY);

console.log("");
console.log(finalBusesNeeded + " bus(es) is (are) needed, with " + lastBus + " passanger(s) on the last bus.");
