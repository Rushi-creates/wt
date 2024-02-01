
const message = function () {
  console.log("Hi, I am Rushi Patil");
};

setTimeout(message, 3000);

setTimeout(() => {
  console.log("Calling arrow function.");
}, 5000);
