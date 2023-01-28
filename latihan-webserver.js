// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-Type", "text/html");
//     response.statusCode = 200;

//     const { method, url } = request;

//     if(url === "/") {
//         if(method === "GET") {
//             response.end("<h1>Homepage</h1>");
//         } else {
//             response.end(`Anda tidak bisa menggunakan ${method} request!`);
//         }

//     } else if(url === "/about") {

//     } else if(url === "/contact") {

//     } else if(url === "/services") {

//     } else if(url === "/support") {

//     } else {
//         response.end("<h2>Halaman tidak ditemukan :(</h2>");
//     }
// };

// const server = http.createServer(requestListener);

// const port = 5_000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server dibuat: ${host}:${port}`);
// });

//  Module scope
// Module Wrapper
// ((exports, require, module, __filename, __dirname) => {
//     const superHero = "Batman";
//     console.log(superHero);
// })();