
const colors = require("../colors/colors");

module.exports = function(data, color, space, newLine){
    var sp = space ?? 0;
    var newL = newLine ?? 0;
    var pre = "";
    for(var i = 0; i < newL; ++i){
        pre += "\n";
    }
    for(var i = 0; i < sp; ++i){
        pre += "\t";
    }
    data = pre + data;
    console.log(color + data + colors.Reset);
}
