/**
 * Created by Administrator on 2015/12/5.
 */
Function.prototype.extends=function(parent){
    this.prototype=new parent();
    this.prototype.constructor=this;
}
function a(){

}
function b(){

}
function c(){

}
function d(){

}
function e(){

}
function test(){

}
b.extends(a);
c.extends(b);
d.extends(c);
e.extends(d);
test.extends(e);
var test1=new test();

// test1 是上面所有函数的实例
var isall=[a,b ,c,d,e,test].every(function(fn){
    return test1 instanceof  fn;
});
isall; //true

var tc=new c();
isall=[a,b ,c,d,e,test].every(function(fn){
    return tc instanceof  fn;
});
isall; //false
isall=[a,b ,c].every(function(fn){
    return tc instanceof  fn;
});
isall;//true