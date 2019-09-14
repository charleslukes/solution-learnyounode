const fs = require("fs");
const path = require("path");

const extFilter = (dirName, fileExt, callback) => {
  fs.readdir(dirName, "utf8", (err, data) => {
    if (err) return callback(err);
    else {
      const main = data.filter(ext => path.extname(ext) === `.${fileExt}`);
      return callback(null, main);
    }
  });
};

module.exports = extFilter;
