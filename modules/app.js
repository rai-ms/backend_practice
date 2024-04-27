
const http = require('http');
const print_and_send = require('./print_and_send');

const server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/' || path === "/home"){
        print_and_send("Home Page Triggered", res);
    }
    else {
        print_and_send("Unkown Page Triggered",res);
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});