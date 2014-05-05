/**
* 简单工厂的javascript实现
* 实现一个计算器，支持加减乘除等运算
* 参考：《大话设计模式》
*/

//AbstractClass
function Calculate(){
   this.a;
   this.b;
   this.checkParam=function(){
	 if (/\D/g.test(this.a) || /\D/g.test(this.b)) return false;
	 this.a=parseInt(this.a);
	 this.b=parseInt(this.b);
	 return true;
   }
   this.getRes=function(){return 0 }
}
//add
function add(){
   this.getRes=function(){
	if(!this.checkParam()) return "只能计算数字";
	return this.a+this.b;
    }
}
add.prototype=new Calculate();//原型继承

//sub
function sub(){
   this.getRes=function(){
	if(!this.checkParam()) return "只能计算数字";
	return this.a-this.b;
    }
}
sub.prototype=new Calculate();

//multi
function multi(){
   this.getRes=function(){
	if(!this.checkParam()) return "只能计算数字";
	return this.a*this.b;
    }
}
multi.prototype=new Calculate();

//divi
function divi(){
   this.getRes=function(){
	if(!this.checkParam()) return "只能计算数字";
	return this.a/this.b;
    }
}
divi.prototype=new Calculate();
//factory
function Factory(type){
	var cal;
	switch(type){
		case "+":
			cal=new add();
			break;
		case "-":
			cal=new sub();
			break;
		case "*":
			cal=new multi();
			break;
		case "/":
			cal=new divi();
			break;
		defalut:
			cal=new Calculate();
			break;
	}
	return cal;
}
//client
var res;
var addObj=Factory("+");
addObj.a=4;
addObj.b=5;
res=addObj.getRes();