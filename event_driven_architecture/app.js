
const http = require('http');
const url = require('url');

// Importing Custom module
const print = require('../modules/print');
const send = require('../modules/send');
const printSend = require('../modules/print_and_send');
const logger = require('../modules/logger');

// Creating server
const server = http.createServer();

// Starting server and listening on ....
server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});


/*
  For event based architecture, 
  listening to the every request event
*/
server.on('request', (req, res) => {

    // Dividing the route into path and query 
    let {query, pathname: path} = url.parse(req.url, true);
    if(path === '/' || path === "/home"){
        var id = query['id'] ?? 0;
        logger("Home Page Triggered", "magenta");
        printSend("Home Page Triggered with: " + id, res);

    }
    else {
        send("Unkown Page Triggered",res);
        print("Unkown Page Triggered");
    }
});