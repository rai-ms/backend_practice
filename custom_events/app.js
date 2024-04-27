// Importing required modules
const http = require('http');
const url = require('url');
const events = require('events');

// Importing Custom module
const send = require('../modules/send');
const logger = require('../logger/color_log');
const colors = require("../colors/colors");

// Creating Server
const server = http.createServer();

// Creating event-emitter instance
let myEmitter = new events.EventEmitter();

// Define custom event names and their corressponding getter enum 
const MyEvents = {
    Route: "route",
    Unknown: "unknown",
    ServerHit: "serverhit",
    Request: "request",

    // Getter for Route
    getRoute(){
        return MyEvents.Route;
    },

    // Getter for Request
    getRequest(){
        return MyEvents.Request;
    },

    // Getter for Server Hit
    getServerHit(){
        return MyEvents.ServerHit;
    },

    // Getter for Unknown
    getUnknown(){
        return MyEvents.Unknown;
    }
};

// Listening to the 'request' event
server.on(MyEvents.getRequest(), (request, response) => {
    // Dividing the route into path and query 
    let { query, pathname: path } = url.parse(request.url, true);
    logger("Path is: " + path, colors.Blue, 3);
    myEmitter.emit(MyEvents.ServerHit, path);
    myEmitter.emit(MyEvents.Route, path);
    myEmitter.emit(MyEvents.Unknown, path);
    send("Received", response);
});

// Listening to the ServerHit event
myEmitter.on(MyEvents.getServerHit(), (data) => {
    logger("Server Hits detected on route " + data, colors.Cyan, 3);
});

// Listening to the Route event
myEmitter.on(MyEvents.getRoute(), (route) => {
    logger("Route Detected " + route, colors.Cyan, 3);
});


// Listening to the Unknown event
myEmitter.on(MyEvents.getRoute(), (data) => {
    logger("Unknwn Event Detected" + data, colors.Magenta, 3);
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
    logger("!!------ Server is started -------!!\n", colors.Yellow, 3, 1);
});
