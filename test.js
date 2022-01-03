var exports = module.exports = {};
//var fs = require("fs").promises;
var fs = require("fs");
//const { promisify } = require('util')
//const mv = promisify(fs.rename);
//const mv = require('mv');
const fsprom = fs.promises;

async function moveFile(sourcePath, destPath, callback)
{
  try 
  {
    //await mv(source, destPath, function() {console.log("The file has been moved")});
   // mv(sourcePath, destPath);
   let copyme = fsprom.copyFile(sourcePath, destPath);
   let unlinkme =  fsprom.unlink(sourcePath);
   await copyme;
   await unlinkme;
  }
  catch(error)
  {
    console.log("Got an error trying to move the file");
  }
}

exports.callSource = function sourceFuntion(message) {
    // moveFile("./fold_1/sample.txt", "./fold_2/sample.txt");
    // moveFile("./fold_1/sample_2.txt", "./fold_2/sample_2.txt");
    // moveFile("./fold_1/sample_3.txt", "./fold_2/sample_3.txt");
    // moveFile("./fold_1/sample_4.txt", "./fold_2/sample_4.txt");
    
    moveFile("./fold_2/sample.txt", "./fold_1/sample.txt");
    moveFile("./fold_2/sample_2.txt", "./fold_1/sample_2.txt");
    moveFile("./fold_2/sample_3.txt", "./fold_1/sample_3.txt");
    moveFile("./fold_2/sample_4.txt", "./fold_1/sample_4.txt");
    
    console.log("operation completed");
}
