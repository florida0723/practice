/**
 * Created by czzou on 2016/7/14.
 */
let _obj={};
let es6proxy=()=>{
    var obj = new Proxy(_obj, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    });
    obj.a=1;//set
    ++obj.a;//get set
    console.log(obj.a);//get 2
    console.log(_obj.a);//2
}
es6proxy();