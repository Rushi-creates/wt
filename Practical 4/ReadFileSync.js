
var fs = require("fs");
var data = fs.readFileSync("Rushi.txt");
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
