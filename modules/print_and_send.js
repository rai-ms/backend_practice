
/*
  This require two argumemts
  First argument must be the data need to send on the front-end
  Second argument must be the res in which data will be send
*/
module.exports = function (data, res){
    print("Sendig Response: " + data);
    res.end(data);
}

// Resuable method, used to log every response sent on the front-end
function print(params) {
    console.log("D_LOG: " + params);
}