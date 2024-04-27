const http = require('http');

const server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/' || path === "/home"){
        console.log("Home Page Triggered");
        let shh = {
            "name": ["Ashish", "Shubham"],
            "title": ["Rai", "Rai"],
            "work": [1,1],
            "tech_Stack" : ["Flutter", "Flutter"]
        };
        var response = {
            "data": shh,
            "status_code": 200,
            "message": "User's Data"
        };

        /*
        Below Line res.writeHead(200); is used to set the header status code, can be set by the user
        */
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'message': "Success",
        });
        res.end(JSON.stringify(response));
    }
    else {
        console.log("Unknown page triggered");
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        let response = {'message': '404 Not Found!'}
        res.end(JSON.stringify(response));
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});
