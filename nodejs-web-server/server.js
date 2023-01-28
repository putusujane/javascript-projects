// Membuat web server yang bisa request dan response
// ================================================
// const http = require("http");

// const requestListener = (request, response) => {

//     response.setHeader("Content-type", "text/html");
//     response.statusCode = 200;

//     const {method} = request;

//     if(method === "GET") {
//         response.end("<h1>Hello, World!</h1>");

//     } else if(method === "POST") {
//         response.end("<h1>Hai!</h1>");

//     } else if(method === "PUT") {
//         response.end("<p>Bonjourr</p>");

//     } else if(method === "DELETE") {
//         response.end("<strong>Om Swastiastu</strong>");
//     }

//     // Kita bisa mengevaluasi tipe methodnya.
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server sukses berjalan pada http://${host}:${port}`);
// });

// Membuat web server mendapatkan data pada body request ketika client
// mengirimkan request menggunakan method POST
// =================================================================

// const http = require("http");

// const requestListener = (request, response) => {

//     response.setHeader("Content-type", "text/html");
//     response.statusCode = 200;

//     const {method} = request;

//     if(method === "GET") {
//         response.end("<h1>Hello, World!</h1>");

//     } else if(method === "POST") {
//         let body = [];

//         request.on("data", (chunk) => {
//             body.push(chunk);
//         });

//         request.on("end", () => {
//             body = Buffer.concat(body).toString();
//             const {name} = JSON.parse(body);
//             response.end(`<h1>Hai ${name}!</h1>`);

//         });

//     }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server berhasil dibuat pada: http://${host}:${port}`);
// });


// Routing Request
// ====================================================================

// Dibawah ini adalah kondisi jika client memasukan url selain / atau /about
// akan muncul response dari server pada blok else.
// const http = require("http");   // Import module http

// const requestListener = (request, response) => {    // fungsi

//     response.setHeader("Content-type", "text/html");
//     response.statusCode = 200;

//     const {method, url} = request;

//     if(url === "/") {
//         // TODO 2: response bila url bernilai "/"

//     } else if(url === "/about") {
//         // TODO 3: response bila url bernilai "/about"

//     } else {
//         // TODO 1: response bila url bukan "/" atau "/about"
//         response.end("<h1>Halaman tidak ditemukan!</h1>");
//     }

// }

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server dibuat pada http://${host}:${port}`);
// })

// Dibawah adalah memberikan logika masing2 blok if else
// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-type", "text/html");
//     response.statusCode = 200;

//     const {method, url} = request;

//     if(url === "/") {
//         if(method === "GET") {
//             response.end("<title>test</title>");
//         } else {
//             response.end(`<h1>Halaman ini tidak bisa diakses dengan method ${method} request</h1>`);
//         }

//     } else if(url === "/about") {
//         if(method === "GET") {
//             response.end("<h1>Halo! ini adalah halaman about.</h1>");

//         } else if(method === "POST") {
//             let body = [];

//             request.on("data", (chunk) => {
//                 body.push(chunk);
//             });

//             request.on("end", () => {
//                 body = Buffer.concat(body).toString();
//                 const {name} = JSON.parse(body);
//                 response.end(`<h1>Halo, ${name}! ini adalah halaman about.</h1>`);
//             });

//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request.`)
//         }
//     } else {
//         response.end(`<h1>Halaman tidak ditemukan!</h1>`);
//     }
// };

// // Membuat server, poty, host
// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server dibuat pada: http://${host}:${port}`);
// });

// Response Status
// ==========================================================
// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-Type", "text/html");

//     const { method, url } = request;

//     if(url === "/") {
//         if(method === "GET") {
//             response.statusCode = 200;
//             response.end("<h1>Homepage</p>");

//         } else {
//             response.statusCode = 400;
//             response.end(`<h1>Tidak bisa akses menggunakan ${method} request!`);
//         }

//     } else if(url === "/about") {
//         if(method === "GET") {
//             response.statusCode = 200;
//             response.end("<h1>About page</h1>");

//         } else if(method === "POST") {
//             let body = [];

//             request.on("data", chunk => {
//                 body.push(chunk);
//             });

//             request.on("end", () => {
//                 body = Buffer.concat(body).toString();
//                 const { name } = JSON.parse(body);

//                 response.statusCode = 200;
//                 response.end(`Halo ${name}, ini adalah About page.`);
//             });

//         } else {
//             response.statusCode = 400;
//             response.end(`Tidak bisa akses menggunakan ${method} request!`);
//         };

//     } else {
//         response.statusCode = 404;
//         response.end("Halaman tidak ditemukan!");
//     };
// };

// const server = http.createServer(requestListener);

// const port = 5_000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server is ON at ${host}:${port}`);
// });

// Response Header
// ====================================================
// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-Type", "application/json");
//     response.setHeader("X-Powered-By", "NodeJS");

//     const { method, url} = request;

//     if(url === "/") {
//         if(method === "GET") {
//             response.statusCode = 200;
//             response.end("<h1>Ini adalah home page</h1>");
//         } else {
//             response.statusCode = 400;
//             response.end(`<h1>Tidak bisa akses menggunakan ${method} request!`);
//         };

//     } else if(url === "/about") {
//         if(method === "GET") {
//             response.statusCode = 200;
//             response.end("<h1>Ini adalah about page</h1>");
//         } else if(method === "POST") {
//             let body = [];

//             request.on("data", chunk => {
//                 body.push(chunk);
//             });

//             request.on("end", () => {
//                 body = Buffer.concat(body).toString();
//                 const { name } = JSON.parse(body);

//                 response.statusCode = 200;
//                 response.end(`<h1>Halo, ${name} ini adalah about page</h1>`);
//             });
//         } else {
//             response.statusCode = 400;
//             response.end(`<h1>Tidak bisa akses menggunakan ${method} request`);
//         };

//     } else {
//         response.statusCode = 404;
//         response.end("<h1>Halaman tidak ditemukan</h1>");
//     }
// };

// const server = http.createServer(requestListener);

// const port = 5_000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`It;s works at: http://${host}:${port}`);
// });

// Response Body
// =========================================================
// Mengubah data pada Body Response menjadi JSON

const http = require("http");

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.setHeader("X-Powered-By", "NodeJS");

    const { method, url} = request;

    if(url === "/") {
        if(method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "Home Page",
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Tidak bisa akses menggunakan ${method} request!`,
            }));
        }

    } else if(url === "/about") {
        if(method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "About Page",
            }));
        } else if(method === "POST") {
            let body = [];

            request.on("data", chunk => {
                body.push(chunk);
            });

            request.on("end", () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo ${name} ini adalah About page`,
                }));
            });

        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Tidak bisa akses menggunakan ${method} request!`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: "Halaman tidak ditemukan!",
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5_000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`It\'s works at ${host}:${port}`);
});