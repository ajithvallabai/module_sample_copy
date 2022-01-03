const testScript = require("./test.js");
var  spawn = require('child_process').spawn;


ls =  spawn('cmd.exe', ['/c', 'run_sleep.bat']);

ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    });
    
ls.stderr.on('data', function (data) {
console.log('stderr: ' + data);
});



process.on('SIGINT', function (code) {
    testScript.callSource("hey message");
    console.log("siginit terminated");
    process.exit();
});


ls.on('exit', function (code) {
    testScript.callSource("hey message");
    console.log('child process exited with code ' + code);
    process.exit();
});

// global.currentChild.on('exit', function(code) { 
    
//     console.log("exit terminated");
//     process.exit();
// });

//testScript.callSource("hey message");