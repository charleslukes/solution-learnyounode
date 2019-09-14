const fs = require("fs");

const input = process.argv[2];

fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    throw new Error();
  }
  console.log(data.split("\n").length - 1);
});
