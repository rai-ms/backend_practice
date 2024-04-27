const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let {query, pathname: path} = url.parse(req.url, true);

    // Below line gives the path of the url
    console.log(path);

    // Below line gives the data sends through query param
    console.log(query);

    if(path === '/pagination'){
        // Getting the start point, setting to default if null
        let startPoint = query['start'] ?? 0;

        // Getting the end point, setting to default if null
        let endPoint = query['end'] ?? 1;

        // Array to store the data
        var array = [];

        // Increasing the pointer by 10
        startPoint *= 10;
        endPoint *= 10;

        // Iterating over the data the get the result
        for(var i = startPoint; i < endPoint; ++i){
            array.push(i);
        }

        // Parsing Data into required format
        var response = {
            "message": "Pagination Data",
            "data": array,
            "loop": true,
            "start": (startPoint - 10),
            "end": (endPoint - 10),
        };

        // Writing into header
        res.writeHead(200);

        // Sending response to front-end
        res.end(JSON.stringify(response));
    }
    else {

        // Sending response if param not matched
        res.end("Server Hits Receive");
    }

    
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Has been in listening!");
});
