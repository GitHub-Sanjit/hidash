const { forEach } = require("./index");

let sum = 0;
forEach([1, 2, 3, 4], (value) => {
  sum += value;
});

if (sum !== 10) {
  throw new Error("Expected summing array to equal 10");
}
