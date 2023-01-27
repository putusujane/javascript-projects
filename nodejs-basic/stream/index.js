const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", {
    highWaterMark: 15,
});

const writeableStream = fs.createWriteStream("output1.txt");

readableStream.on("readable", () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // Catch the error when the chunk cannot be read.
    }
});

readableStream.on("end", () => {
    writeableStream.end();
});