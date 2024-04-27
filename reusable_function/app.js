
const http = require('http');

function print(params) {
    console.log(params);
}

function sendResponse(response, res){
    print("Sendig Response: " + response);
    res.end(response);
}

const server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/' || path === "/home"){
        sendResponse("Home Page Triggered", res);
    }
    else {
        sendResponse("Unkown Page Triggered",res);
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});