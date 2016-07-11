var config={
    username:'xxx',
    password:'xxxxx',
    svnPath:'http://svn.sogou-inc.com/svn/qadev/Venus/MobileCloud/MobileCloud',//项目地址
    projectName:'MobileCloud',//项目文件夹名称，用来读取文件,
    //处理seaJs模块化加载的文件，指定配置文件名
    /** config.js里边需要写一个别名配置对象
     *var config ={'别名':"Scripts/xxx/xxx.js(js文件全路径)"}
     *别名用单引号，全路径用双引号，以方便正则匹配
     *seaJs.config中，base配置为根路径  base:"../"
     */
    seaJsConfig:'config.js'
};
var exec = require('child_process').exec;
var fs = require("fs");
var path=require("path");
var fileMap={};

function getVersion() {
    console.log("从SVN获取版本号...");
    var version = exec('svn list -v --depth infinity --username '+config.username+' --password '+config.password+' '+config.svnPath,
    { encoding: "utf8"},
        function (error, stdout, stderr) {
            stdout=stdout.replace(/\r/g,"");
            var fileArray=stdout.split('\n');
            fileArray.forEach(function(file) {
                if(/^\s*$/.test(file)) return;
                var filePar=file.split(/\s+/);
                fileMap[__dirname+'\\'+config.projectName+'\\'+filePar[filePar.length-1].replace(/\//g,"\\")]=filePar[1];
            });
            checkOutFile();
        });
}
function checkOutFile() {
    console.log("从SVN下载文件...");
    var version = exec('svn co --username '+config.username+' --password '+config.password+' '+config.svnPath,
    function(error, stdout, stderr){
        if(error==null){
            readFile();
        }
    });
}
function readFile() {
    //var path = "H:\\NodeServer\\NodeServer\\MobileCloud";
    console.log("读取文件...");
    explorer(__dirname+'\\'+config.projectName);
    function explorer(filepath){
        fs.readdir(filepath, function (err, files) {
            if (err) {
                console.log("error:\n" + err);
                return;
            }
            files.forEach(function (file) {
                fs.stat(filepath + "\\" + file + '', function (err, stat) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (stat.isDirectory()) {
                        //console.log(filepath + "\\" + file + "\\");
                        explorer(filepath + "\\" + file);
                    } else {
                        //console.log(filepath + "\\" + file);
                        if(/(.aspx|.html|.jsp|.htm)$/.test(file)) addVersion(filepath,file);
                        //if(file=="index.aspx") addVersion(filepath,file);
                        if(config.seaJsConfig && file===config.seaJsConfig) addVersionOfSeaJs(filepath,file);
                    }
                });
            });
        });
    }
}
//处理传统网页的静态资源
function addVersion(filepath,file){
    fs.readFile(filepath + "\\" + file, function (err, data) {
        if (err) throw err;
        var docStr=data.toString();
        //替换用标签加载的js文件
        docStr=docStr.replace(/<\s*script\s+[^>]*src=(\"|')([^>]+\.js(?:\?v=\d*)?)\1[^>]*>\s*<\s*\/\s*script\s*>/g,
            function(str,index,initStr){
                //return str.replace(/(?=\"|').+\.js(\?v=\d*)?(?=\"|')/g,function(substr){
                return str.replace(/(?=src\=(\"|')).+\.js(\?v=\d*)?(?=\"|')/g,function(substr){
                    substr=substr.split("?v=")[0];//若有，出去旧的版本号
                    var uri=substr.replace(/src=(\"|')/,""); //获取真实文件uri
                    if(/^http\:/.test(uri)) return substr;//远程获取的，没有版本号,暂不处理
                    //TODO,如果有用绝对路径的站点，需要额外处理
                    var version=getVersionByUri(filepath,uri);
                    return substr+"?v="+version;
                });
        });
        //替换用标签加载的css文件
        docStr=docStr.replace(/<\s*link\s+[^>]*href=(\"|')([^>]+\.css(?:\?v=\d*)?)\1[^>]*\/?\s*>/g,
            function(str,index,initStr){
                return str.replace(/(?=href\=(\"|')).+\.css(\?v=\d*)?(?=\"|')/g,function(substr){
                    substr=substr.split("?v=")[0];//若有，出去旧的版本号
                    var uri=substr.replace(/href=(\"|')/,""); //获取真实文件uri
                    if(/^http\:/.test(uri)) return substr;//远程获取的，没有版本号,暂不处理
                    //TODO,如果有用绝对路径的站点，需要额外处理
                    var version=getVersionByUri(filepath,uri);
                    return substr+"?v="+version;
                });
        });
        //写文件
        fs.writeFile(filepath + "\\" + file, docStr, function (err) {
            if (err) throw err;
            console.log('packed:'+filepath + "\\" + file);
        })
    });
}
//处理seaJs加载的文件
function addVersionOfSeaJs(filepath,file){
    var rootPath
    fs.readFile(filepath + "\\" + file, function (err, data) {
        if (err) throw err;
        var docStr=data.toString();
        docStr=docStr.replace(/config\s\=\s\{[^\}]+\}/g,function(str){
           return  str.replace(/\"[^\"\r\n]+(?=\")/g,function(substr){
                substr=substr.split("?v=")[0];//若有，出去旧的版本号
                var version=getVersionByUri(__dirname+'\\'+config.projectName,substr.slice(1));
                return substr+"?v="+version;
           });
        });
        //写文件
        fs.writeFile(filepath + "\\" + file, docStr, function (err) {
            if (err) throw err;
            console.log('packed:'+filepath + "\\" + file);
        })
    });
}
function getVersionByUri(filepath,uri){
    var filesysArray=filepath.split("\\");
    var uriArray=uri.split("../");
    while(uriArray.length>1){
        uriArray.shift();
        filesysArray.pop();
    }
    var sysPath="";
    while(filesysArray.length>0) {
        sysPath+=filesysArray.shift()+"\\";
    }
    return fileMap[sysPath+uriArray[0].replace(/\//g,"\\")];
}
exports.getVersion = getVersion;
exports.checkOutFile = checkOutFile;
exports.readFile = readFile;
getVersion();