/**
 * Created by czzou on 2016/7/14.
 */
let testSet=()=>{
    let s1=new Set([5,4,5,1,2,1,4,3,2,4,6,7,8,9,6,0,3,2,1]);
    s1.add(999);
    s1.delete(5);
    console.log(s1);
    console.log(s1.has(999));
    s1.clear();
    console.log(s1.size);
}

let testMap=()=>{
    //set get has delete
    var m = new Map();
    var o = {p: "Hello World"};

    m.set(o, "content")
    console.log(m.get(o)) // "content"

    console.log(m.has(o)) // true
    console.log(m.delete(o)) // true
    console.log(m.has(o)) // false
}

testMap();