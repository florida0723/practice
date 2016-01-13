/**
 * Created by czzou on 2015/12/30.
 */
var express=require("express");
var debug=require("debug")("app");
var app=express();
app.use(express.static("page"));
var server=app.listen(8888,function(){
    var address="http://"+server.address().address+":"+server.address().port;
    debug("listening on",address)
});

