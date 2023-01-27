// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
// })

// =============================

// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);
// ================================

// const proses_argv = process.argv;
// console.log(proses_argv);

// ====================================

// const fName = process.argv[2];
// const lName = process.argv[3];

// console.log(`hello, ${fName} ${lName}`);

// modulatization

// const coffee = require("./coffee");
// console.log(coffee);

// Import lebih dari satu nilai
const {fName, lName} = require("./coffee");

console.log(fName);
console.log(lName);