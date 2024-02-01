
var fs = require("fs");
fs.writeFile("Rushi.txt", "Hii Rushi. Hope you're havin' a good day!", function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Write operation complete");
  }
});
