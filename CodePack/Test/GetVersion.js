
var exec = require('child_process').exec;
var version = exec('svn list -v --depth infinity --username venus --password Sogou-inc.com http://svn.sogou-inc.com/svn/qadev/Venus/MobileCloud', {
    encoding: "utf8"
},
  function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
  });