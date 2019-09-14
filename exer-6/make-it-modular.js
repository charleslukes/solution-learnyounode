const reader = require("./mymodule");

const dirName = process.argv[2];
const fileExt = process.argv[3];

reader(dirName, fileExt, (err, data) => {
  if (err) return err.message;
  else {
    data.forEach(element => console.log(element));
  }
});
