/**
 * Created by zouchengzhuo on 2014/7/1.
 */
var exec = require('child_process').exec;
var version = exec('svn co --username venus --password Sogou-inc.com http://svn.sogou-inc.com/svn/qadev/Venus/MobileCloud',
    function(error, stdout, stderr){
        if(error==null){
            //changeFile(fileVersionMap);
        }
    });