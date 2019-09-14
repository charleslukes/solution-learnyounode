const arg = process.argv[2];
const fs = require("fs");

console.log(
  fs
    .readFileSync(arg)
    .toString()
    .split("\n").length - 1
);
