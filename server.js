// const http = require("http");

 

// const server = http.createServer((req, res) => {
//  if (req.url === '/') {
//     res.writeHead(200, {
//         "content-type": "text/html",
//     });
//     res.end("<h1>Home page</h1>");
//   } else if (req.url === "/about") {
//     res.writeHead(200, {
//         "content-type": "text/html",
//     });
//     res.end("<h1>About page</h1>");
//   } else if (req.url === "/contact") {
//     res.writeHead(200, {
//         "content-type": "text/html",
//     });
//     res.end("<h1>Contact page</h1>");
//   } else {
//     res.writeHead(404, {
//         "content-type": "text/html",   
//     });
//     res.write("<h1>Error 404</h1>");
//     res.write('<a href= '/'>Go to homepage</a>');
//     res.end();
//   }
// });

// server.listen(3000, "localhost", ()=> {
//   console.log("server listening ...");
// });
