// const routes = [
//     {
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "<h1>Selamat datang!</h1>";
//         },
//     },

//     {
//         method: "GET",
//         path: "/about",
//         handler: (request, h) => {
//             return "<h1> ini adalah about page</h1>";
//         },
//     },
// ];

// module.exports = routes;
// =======================================================

// Latihan
const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "<h1>Home page</h1>";
        },
    },

    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return `<h1>Tidak bisa akses menggunakan method tersebut.`;
        },
    },

    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "<h1>About Page</h1>";
        },
    },

    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "<h1>Tidak bisa menggunakan method tersebut.</h1>";
        },
    },

    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "<h1>Halaman tidak ditemukan</h1>";
        }
    }
];

// Ekspor nilai routes
module.exports = routes;