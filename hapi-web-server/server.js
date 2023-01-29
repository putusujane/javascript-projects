// Membuat HTTP Server menggunakan Hapi
// =========================================

// impor modul pihak ketiga (Hapi)
// const Hapi = require("@hapi/hapi");

// const init = async () => {
//     const server = Hapi.server({
//         port: 5_000,
//         host: "localhost",
//     });

//     server.route({
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "<h1>Hello, World!</h1>";
//         },
//     });

//     await server.start();
//     console.log(`Berhasil! >> ${server.info.uri}`);
// };

// process.on("unhandledRejection", (error) => {
//     console.log(error);
//     process.exit(1);
// });

// init();

// Method/Verb Request Routing
// ================================================
// Menambahkan routing agar dapat merespon permintaan sesuai method, url.
// Modulasi route di file yang berbeda.

// const Hapi = require("@hapi/hapi"); // impor modul hapi
// const routes = require("./routes");

// const init = async () => {      // Inisialisasi hapi menggunakan asynchronous
//     const server = Hapi.server({
//         port: 5_000,        // Port
//         host: "localhost",  // Host
//     });

//     server.route(routes);   // variabel routes dari file routes.js

//     await server.start();   // Memulai server
//     console.log(`Server berhasil pada: ${server.info.uri}`);    // Menampilkan di console
// }

// process.on("unhandledRejection", (error) => {   // Proses
//     console.log(error);
//     process.exit(1);
// });

// init(); // Memanggil fungsi init .


// Path Parameter
// ================================================

// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");


// const init = async () => {
//     const server = Hapi.server({
//         port: 5_000,
//         host: "localhost",
//     });

//     server.route(routes);

//     await server.start();
//     console.log(`Server dibuat pada ${server.info.uri}`);
// };

// process.on("unhandledRejection", error => {
//     console.log(error);
//     process.exit(1);
// });

// init();


// Query Parameter
// =====================================================
// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//     const server = Hapi.server({
//         port: 5_000,
//         host: "localhost",
//     });

//     server.route(routes);

//     await server.start();
//     console.log(`Server berhasil pada ${server.info.uri}`);
// };

// process.on("unhandledRejection", error => {
//     console.log(error);
//     process.exit(1);
// });

// init ();


// Body/Payload Request
// =====================================================

// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//     const server = Hapi.server({
//         port: 5_000,
//         host: "localhost",
//     });

//     server.route(routes);

//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };

// process.on("unhandledRejection", error => {
//     console.log(error);
//     process.exit(1);
// });

// init();


// Body/Payload Request
// =====================================================
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
    const server = Hapi.server({
        port: 5_000,
        host: "localhost",
    });

    server.route(routes);

    await server.start();
    console.log(`Server ok : ${server.info.uri}`);
}

process.on("unhandledRejection", error => {
    console.log(error);
    process.exit(1);
})

init();