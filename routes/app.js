
const http = require('http');

const server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/' || path === "/home"){
        console.log("Home Page Triggered");
       
        res.end("Home Page Triggered");
    }
    else {
        console.log("Unknown page triggered");
        res.end("Unkown Page Triggered");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});