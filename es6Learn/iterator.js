/**
 * Created by czzou on 2016/7/18.
 */
let testIterator=()=>{
    let arr=[9,5,7,6,4,"a","b","c"];
    let iterator=arr[Symbol.iterator]();
    let item;
    while(!(item=iterator.next()).done){
        console.log(item.value);
    }
}
let testIterator2=()=>{

}
testIterator();