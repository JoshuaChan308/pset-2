
const readlineSync = require("readline-sync");

let Width_in = Number(readlineSync.question("\nWidth: "));
let Length_in = Number(readlineSync.question("Length: "));

let Diag = Math.sqrt((Length_in*Length_in)+(Width_in*Width_in))
Diag = Math.round(100*Diag)/(100);
Finaldiag = Diag.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("\nA(n) " + Width_in + "-by-" + Length_in + "-inch sheet of paper has a diagonal of " + (Finaldiag) + " inch(es).\n");
