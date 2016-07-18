/**
 * Created by czzou on 2016/7/18.
 */
let testGenerator=()=>{
    function* myGenerator(){
        let temp="";
        temp=" hello ";
        yield temp;
        temp=" world ";
        yield temp;
        temp="fuck"
        return temp;
    }
    let interator=myGenerator();
    console.log(interator.next());
    console.log(interator.next());
    console.log(interator.next());
    console.log(interator.next());
    console.log(interator.next());
    for (let v of myGenerator()) {
        console.log(v);
    }
}
testGenerator();