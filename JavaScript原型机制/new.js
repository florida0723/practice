/**
 * Created by Administrator on 2015/12/5.
 */
function test(name){
    this.name=name || "test";
}
test.prototype.getName=function(){
    console.log("R:",this.name);
}
//通过new获得test函数的一个实例
var test1=new test("test1");
//通过分解步骤获得test函数的一个实例
// step1.新建一个空白对象
var test2={};
// step2.将这个空白对象的原型指向构造函数的原型
test2.__proto__=test.prototype;
// step3.将这个空白对象作为this调用一遍构造函数
test.apply(test2,["test2"]);



