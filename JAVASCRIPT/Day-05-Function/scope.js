//! Scope of variable in JS
// debugger;
var a = 10;
let b = 20;
const c = 30;

if(true){
    var a1 = 40;
    let b1 = 50;
    const c1 = 60;
}

function fun(){
    var a2 = 70;
    let b2 = 80;
    const c2 = 90;
}
fun();