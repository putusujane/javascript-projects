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
// const routes = [
//     {
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "<h1>Home page</h1>";
//         },
//     },

//     {
//         method: "*",
//         path: "/",
//         handler: (request, h) => {
//             return `<h1>Tidak bisa akses menggunakan method tersebut.`;
//         },
//     },

//     {
//         method: "GET",
//         path: "/about",
//         handler: (request, h) => {
//             return "<h1>About Page</h1>";
//         },
//     },

//     {
//         method: "*",
//         path: "/about",
//         handler: (request, h) => {
//             return "<h1>Tidak bisa menggunakan method tersebut.</h1>";
//         },
//     },

//     {
//         method: "*",
//         path: "/{any*}",
//         handler: (request, h) => {
//             return "<h1>Halaman tidak ditemukan</h1>";
//         }
//     }
// ];

// // Ekspor nilai routes
// module.exports = routes;

// Path Parameter
// =========================================================
// const routes = [
//     {
//     method: "GET",
//     path: "/",
//     handler: (request, h) => {
//         return "<h1>Home page</h1>";
//     }
// },

// {
//     method: "*",
//     path: "/",
//     handler: (request, h) => {
//         return "<h1>Tidak bisa akses menggunakan method ini!</h1>";
//     }
// },

// {
//     method: "GET",
//     path: "/about",
//     handler: (request, h) => {
//         return "<h1>About page</h1>";
//     }
// },

// {
//     method: "*",
//     path: "/about",
//     handler: (request, h) => {
//         return "<h1>Tidak bisa akses menggunakan method ini!</h1>";
//     }
// },

// {
//     method: "GET",
//     path: "/hello/{name?}",
//     handler: (request, h) => {
//         const { name = "Stranger" } = request.params;
//         return `<h1> hello, ${name}</h1>`;
//     }
// },

// {
//     method: "*",
//     path: "/{any*}",
//     handler: (request, h) => {
//         return "<h1>Tidak ditemukan</h1>";
//     }
// }
// ];

// module.exports = routes;


// Query Parameter
// ======================================================
// const routes = [
//     {
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "Home page";
//         }
//     },

//     {
//         method: "*",
//         path: "/",
//         handler: (request, h) => {
//             return "Tidak bisa akses pakai method ini!";
//         }
//     },

//     {
//         method: "GET",
//         path: "/about",
//         handler: (request, h) => {
//             return "About page";
//         }
//     },

//     {
//         method: "*",
//         path: "/about",
//         handler: (request, h) => {
//             return "Tidak bisa akses pakai method ini!";
//         }
//     },

//     {
//         method: "GET",
//         path: "/hello/{name?}",
//         handler: (request, h) => {
//             const { name = "Stranger" } = request.params;
//             const { lang } = request.query;

//             if(lang === "id") {
//                 return `Hai, ${name}`;
//             };

//             return `Hello, ${name}`;
//         }
//     },

//     {
//         method: "*",
//         path: "/{any*}",
//         handler: (request, h) => {
//             return "Halaman tidak ditemukan!";
//         }
//     }
// ];

// module.exports = routes;


// Body/Payload Request
// =====================================================
// const routes = [
//     {
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "Home page";
//         }
//     },

//     {
//         method: "*",
//         path: "/",
//         handler: (request, h) => {
//             return "Tidak bisa akses pakai method tersebut!";
//         }
//     },

//     {
//         method: "GET",
//         path: "/about",
//         handler: (request, h) => {
//             return "About page";
//         }
//     },

//     {
//         method: "*",
//         path: "/about",
//         handler: (request, h) => {
//             return "Tidak bisa akses pakai method tersebut!";
//         }
//     },
    
//     {
//         method: "GET",
//         path: "/hello/{name?}",
//         handler: (request, h) => {
//             const { name = "Stranger" } = request.params;
//             const { lang } = request.query;

//             if(lang === "id") {
//                 return `Hai, ${name}`;
//             } else {
//                 return `Hello, ${name}`;
//             }
//         }
//     },

//     {
//         method: "POST",
//         path: "/login",
//         handler: (request, h) => {
//             const { username, passowrd } = request.payload;

//             return `Welcome, ${username}!`;
//         }
//     },

//     {
//         method: "*",
//         path: "/{any*}",
//         handler: (request, h) => {
//             return "Halaman tidak ditemukan!";
//         }
//     },
// ]

// module.exports = routes;


// Response Toolkit
// ==================================================
const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return h.response("success")
            .type("text/html")
            .header("X-Powered-By", "NodeJS");
        }
    },
];

module.exports = routes;