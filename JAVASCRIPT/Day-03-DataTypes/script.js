console.log("Primitive Datatypes");
let a = 10;
console.log(typeof a);
a = 10.5
console.log(typeof a);
a = 'abc';
console.log(typeof a);

a = false;
console.log(typeof a);

a = undefined;
console.log(typeof a);

a = Symbol('Akshay')
console.log(typeof a);  // symbol


a = null;
console.log(typeof a); // object ... it's a bug in javascript

console.log("Non Primitive Datatypes");

let b = [2,3,4];
console.log(typeof b);

b = {};
console.log(typeof b);

b = Math;
console.log(typeof b);

b = function(){
    console.log("Hello");
}
console.log(typeof b);  // function


b = new Date;
console.log( typeof b);










