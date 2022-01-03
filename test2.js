const fs = require('fs');
const fsprom = fs.promises;

function f(input, callback) {
    var value;
    let path1= "./fold_2/sample.txt";
    let path2 =  "./fold_1/sample.txt";
    // Assume the async call always succeed
    fsprom.copyFile(path1, path2);

}

f("help","");
console.log(st);