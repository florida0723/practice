function checkOut() {
    var spawn = require('child_process').spawn;
    ls = spawn('c:/windows/system32/cmd.exe', ['/e', '/usr']);
    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
}
exports.checkOut=checkOut;
//Replace 'ls' with 'c:/windows/system32/cmd.exe', and ['-lh', '/usr'] 
//with ['/c', 'batfile.bat'] to run the batch file batfile.bat.