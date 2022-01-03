var exports = module.exports = {};
//var fs = require("fs").promises;
var fs = require("fs");
const { resolve } = require("path/posix");
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
  //  console.log(destPath);
   let copyme = fsprom.copyFile(sourcePath, destPath);
   let unlinkme = fsprom.unlink(sourcePath);
   await copyme;
   await unlinkme;
  // fs. copyFileSync(sourcePath, destPath);
  // fs. unlinkSync(sourcePath);
  console.log("present");
    return "1";
  }
  catch(error)
  {
    console.log("Got an error trying to move the file");
    return error;
  }
}

exports.callSource = async function sourceFuntion(message) {
    // moveFile("./fold_1/sample.txt", "./fold_2/sample.txt");
    // await moveFile("./fold_2/sample_2.txt", "./fold_1/sample_2.txt").then(imgBuffer => {
    //     console.log(imgBuffer);
    // }).catch(err => {
    //     console.error(err);
    // });
    
    await moveFile("./fold_2/sample_2.txt", "./fold_1/sample_2.txt");
  
    await moveFile("./fold_2/sample_3.txt", "./fold_1/sample_3.txt");
    
    // const m1 = moveFile("./fold_1/sample_4.txt", "./fold_2/sample_4.txt");
    // console.log(m1);
    // console.log("m1 compltede");
    // const tim = moveFile("./fold_2/sample.txt", "./fold_1/sample.txt");
    // console.log(tim);
    
    // moveFile("./fold_2/sample_2.txt", "./fold_1/sample_2.txt");
    // moveFile("./fold_2/sample_3.txt", "./fold_1/sample_3.txt");
    //moveFile("./fold_2/sample_4.txt", "./fold_1/sample_4.txt");
    
    console.log("operation completed");
    return "success"

}
