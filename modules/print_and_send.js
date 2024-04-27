
module.exports = function (response, res){
    print("Sendig Response: " + response);
    res.end(response);
}

function print(params) {
    console.log(params);
}