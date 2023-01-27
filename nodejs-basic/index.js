// const data = (name, age) => {
// 	console.log(`Name: ${name}, age: ${age}`);
// }

// data("Putu", 27);

// Menentukan nilai host berdasarkan kondisi NODE_ENV
// const server = new Server({
// 	host: ProcessingInstruction.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

// Node Package Manager
// const moment = require("moment");

// const date = moment().format("DD MM YYYY");

// console.log(date);

// Filesystem (fs)
// const fs = require("fs");

// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log("Fail to read file");
//         return;
//     }

//     console.log(data);
// }

// fs.readFile("todo.txt", "utf-8", fileReadCallback); // Asynchronous

// Synchronous
// const fs = require("fs");
// const data = fs.readFileSync("todo.txt", "utf-8");
// console.log(data);

// Readable Stream
// const fs = require("fs");

// const readableStream = fs.createReadStream("todo.txt", {
//     highWaterMark: 10
// });

// readableStream.on("readable", () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch (error) {
//         // Catching error when the chunk cannot be read.
//     }
// });

// readableStream.on("end", () => {
//     console.log("\n\nDone");
// });

// Writeable Stream
// const fs = require("fs");
// const writeableStream = fs.createWriteStream("output.txt");

// writeableStream.write("Paragraf pertama\n");
// writeableStream.write("Paragraf kedua\n");
// writeableStream.write("Paragraf ketiga\n");
// writeableStream.end("Selesai");