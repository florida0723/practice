/**
 * Created by Administrator on 2015/12/5.
 */
function test(a,b){
    this.a= a || "a";
    this.b= b || "b";
}
// 此时的this指向的是全局对象，浏览器环境下是window
window.a; // undefined
test();
window.a; // "a"

// 此时的this指向的是new出来的对象
var test1=new test("a2");
test1.a; // "a2"

var test2={};
//此时的this指向的是test2
test.call(test2,"a3","b3");
test2.a; // "a3"
test.apply(test2,["a3","b3"]);
test2.a; // "a3"





