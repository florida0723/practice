/**
 * Created by czzou on 2016/7/14.
 */
let es6proxy=()=>{
    var obj = new Proxy({}, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    });
    obj.a=1;
    ++obj.a;
}
es6proxy();