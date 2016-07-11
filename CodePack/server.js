var http = require('http');
var start = require('./Addversion_web.js').start;
var getVersion = require('./Addversion_web.js').getVersion;
console.log("服务已启动，访问localhost:8088 开始为静态文件添加版本号");
http.createServer(function (request, response) {
response.writeHead(200, { 'Content-Type': 'text-plain;charset=utf-8' });
getVersion(request, response);
//readFile();
}).listen(8088);