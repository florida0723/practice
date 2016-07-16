/**
 * Created by czzou on 2016/7/14.
 */
let objectex=()=>{
    let a="test";
    let obja={a};
    console.log("=== 对象属性简化 ===",obja);

    let objb={
        a:1,
        b(){
            return this.a
        }
    }
    console.log("=== 对象方法简化 ===",objb.b());

    //getter 和 setter
    let objc={
        _value:0,
        get value(){
            return this._value;
        },
        set value (data){
            this._value=data;
        }
    }
    objc.value=555;
    console.log("=== 对象方法简化 ===",objc.value);

    //属性名表达式
    let objd={
        ["h"+"ello"]:5,
        ["f"+"n"](){
            return this["h"+"ello"];
        }
    }
    console.log("=== 属性名表达式 ===",objd.fn())

    //对象浅拷贝
    let tobeassign=[{a:1,b:2},{objd},{c:6,b:"覆盖"}];
    let obje={}
    Object.assign(obje,...tobeassign);
    console.log("=== 对象浅拷贝 ===",obje);

    //属性展开  "..." 这货怎么就像个万能展开打包符...
    //尚未支持
    let z = { a: 3, b: 4 };
    //let objf = {...z};
    //console.log("=== 属性展开 ===",objf);


}
objectex();