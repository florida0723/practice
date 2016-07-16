/**
 * Created by czzou on 2016/7/14.
 */
/**
 * 函数扩展
 */
function fnex(){
    //默认参数
    let fn1=(x=888,y=999)=>{
        return x+y;
    }
    //对象参数的默认值
    let fn2=({x,y=8})=>{
        return x*y;
    }
    //默认对象参数，解构赋值
    let fn3=(x,{y,z=3}={y:666})=>{
        return x*y*z;
    }
    console.log("fn1",fn1());
    console.log("fn2",fn2({x:3}));
    console.log("fn3",fn3(1,{y:2}));
    console.log("fn3",fn3(1));
    //指定默认值之后，参数个数属性会变成1
    console.log("=== param length",((a,b=4)=>{}).length);

    //demo:指定必选参数
    function throwIfMissing() {
        throw new Error('Missing parameter');
    }
    function foo(mustBeProvided = throwIfMissing()) {
        return mustBeProvided;
    }
    //foo();

    //rest参数，把参数打包成数组
    let restargs=(p1,...arr)=>{
        arr.push(p1);
        return arr;
    }
    console.log("=== restargs ===",restargs(1,2,3,4,5,6,7,8));
    //扩展运算符，把数组扩展为参数
    let nums=[2,10];
    let sum=Math.pow(...nums);
    console.log("=== 扩展运算符 ===",sum);
    console.log("=== 扩展运算符 ===",[0,1,2,3,...nums]);
    console.log("=== 扩展运算符 ===",[..."hello"]);

    //各种箭头函数
    let arrowfn1=x=>x*x;
    let arrowfn2=(x,y,z)=> (x+y+z);
    let arrowfn3=(...numbers)=>numbers;
    let arrowfn4=(x,y,z=5)=>{
        return x*y*z;
    }
    console.log("arrowfn3",arrowfn3(4,5,8,6,5));
    console.log("arrowfn4",arrowfn4(4,5));


}
fnex()