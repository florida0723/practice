/**
 * Created by czzou on 2016/7/12.
 */
//箭头函数
'use strict'

/**
 * let 与 const
 */
function let_const(){
    //1.定义一个函数
    const testfn = (a,b,c) =>{
        return a*b*c;
    }
    let ttt=testfn(5,6,7);
    console.log('ttt',ttt);

//数组相关方法
    let arr=[1,2,3];
    arr=arr.map(item=>{
        return item*item;
    })
    console.log('arr',arr);
    arr=arr.filter(item=>{
        return item % 2 ==0;
    });
    console.log('arr',arr);

//this指向，在箭头函数中，this始终指向函数作为构造函数时，创建的对象本身
    let test={
        a:1,
        b:function(){
            this && (this.a=2);
            console.log("this in es5 function",this && this.a);
        },
        c:()=>{
            this.a=3;
            console.log("this in es6 function",this.a);
        }
    }
    let fn_b=test.b;
    let fn_c=test.c;
    test.b();fn_b();
    test.c();fn_c();
}

