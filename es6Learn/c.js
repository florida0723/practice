/**
 * Created by czzou on 2016/7/12.
 */
//函数默认参数
'use strict'
let testfn=(a,opt={a:1,b:2,c:3})=>{
    return a+opt.a+opt.b+opt.c;
}
//console.log(testfn(5));
console.log(testfn(1,{a:6,b:8,c:9}))