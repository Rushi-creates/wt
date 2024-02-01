
var fs = require("fs");
fs.unlink("Rushi.txt", function () {
  console.log("Deletion Complete.");
});
