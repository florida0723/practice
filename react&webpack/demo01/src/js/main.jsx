/**
 * Created by czzou on 2016/1/18.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var name={test:"abc"};
setInterval(function(){
    name.test=name.test+name.test;
},2000)
ReactDOM.render(
    <span>{name.test}</span>,
    document.getElementById("zcz")
);