// I will use the reduce function

console.log(process.argv.splice(2).reduce((acc, cur) => (acc += +cur), 0));
