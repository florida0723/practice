/**
 * Created by czzou on 2016/7/12.
 */
'use strict' //严格模式才能用es6 let

/**
 * let和const
 */
function let_const(){
    var a=1;
    var b=2222;
    const c=[1,2,3];
    const d={a:1}
    {
        console.log("b",b);
        //console.log(a);//若块级作用域里边包含let定义过同名变量，则报错：a is not defined
        let a=2;
        console.log("a in block",a);
    }
    console.log("a out of block",a);
    console.log("const c",c);
//c=444; // 报错：Assignment to constant variable.
    c.push(666);
    console.log("const c",c);
    console.log("const d",d);
    d.b=2;
    console.log("const d",d);
}

/**
 * 解构赋值，貌似此版本的node尚未支持
 */
function destructuring(){
    //var [a, b, c] = [1, 2, 3];
    // console.log(a,b,c);
}

function stringfn(){

    let s="hello world";
    console.log(s.startsWith("hello"));
    console.log(s.includes("or"));
    console.log(s.endsWith("rld"));
    s=s.repeat("2")
    console.log(s);
    //尚未支持
    //s.padStart(40,"a");
    //s.padEnd(50,"a");
    //console.log(s);


    //模板字符串
    var name = "Bob", time = "today";
    var temp=`Hello ${name}, how are you ${time}?`;
    console.log(temp);
    const tmpl = addrs => `
      <table>
      ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
      `).join('')}
      </table>
    `;
    const data = [
        { first: '<Jane>', last: 'Bond' },
        { first: 'Lars', last: '<Croft>' },
    ];
    console.log(tmpl(data));


}
stringfn()