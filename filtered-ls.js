const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], "utf8", (err, file) => {
  if (err) throw err.message;
  file.forEach(ext => {
    if (path.extname(ext) === `.${process.argv[3]}`) {
      console.log(ext);
    }
  });
});
