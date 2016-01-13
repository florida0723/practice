/**
 * Created by Administrator on 2015/12/5.
 */
//父函数
function person(){
    this.name= "person";
}
//父函数原型属性和方法
person.prototype.head="head";
person.prototype.hands="hands";
person.prototype.getName=function(){
    return this.name;
}

//子函数
function coder(){
    this.name="coder";
}
//将子函数的原型设置为父函数的实例
coder.prototype=new person();
//还原constructor
coder.prototype.constructor=coder;
//子函数原型方法
coder.prototype.writeCode=function(){
    console.log("hello world!");
}
// 扩展，实现父函数构造方法 ....




