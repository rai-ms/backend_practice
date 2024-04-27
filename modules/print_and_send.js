
module.exports = function sendResponse(response, res){
    print("Sendig Response: " + response);
    res.end(response);
}

function print(params) {
    console.log(params);
}