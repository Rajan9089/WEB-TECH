console.log('Function');
// ! function declaration
// function demo(){
//     console.log('This is the first function');
// }
// demo()
// ! parameterized function 
// function sum(a , b){
//     return a+b
// }
// let res = sum(10 , 20);
// console.log(res);

// ! // ! 

// debugger;
// function fun(a,b){
//     let c = 30;
//     return a+b+c
// }
// let a = fun(10 , 20);
// console.log(a);


// ! Scope of variables in js 
// debugger;
// var a = 10; // global
// let b = 20; // script
// const c = 30; //script
// if(true){
//     var a1 = 40; // global
//     let b1 = 50; //block
//     const c1 = 60; // block
// }
// function fun(){
//     var a2 = 70; // local
//     let b2 = 80; // local
//     const c2 = 90 // local
// }
// fun()


// ! Types of functions 
// ! 1. named Function 
// a function with the identifier is called as named function 
// function fun(){}
// Only named functions are hoisted , other that named function no other function is hoisted

// ! 2. anonymous function
// a function without identifier is called as anonymous function
// anonymous function can be called with the help of variable name , in which we have stored it 
// let a = function(){
//     console.log('I am anonymous function');
// }
// a()
// !3. Function Expression
// function expression is a way to store a function as a value inside a variable 
// in a function expression we cannot call the function with function identifier , we can call it only with the help of variable name
// let add = function Sum(a , b){
//     console.log(a+b);
// }
// add(10 , 20)
// !4. first class function 
// A function which is treated as a value and stored inside a variable is called as first class function
// ex -> Sum function

// !5. Arrow function
// arrow function is the concise way (shorter syntax to write any function in js )
// let sqr = a=>a*a;
// console.log(sqr(5));



//! https://codeshare.io/21PMOj
// !6. HOF
//  A function which accepts another function as the argument
// or it returns a function , ex -> calc
// function calc(a , b ,c){
//     a(b,c)
// }
// calc(sum , 10 , 5)
// calc(sub , 10 , 5)
// calc(mult , 10 , 5)
// calc((p1 , p2)=>{
//      console.log(p1%p2);
// } , 17, 3)

// !7. callback function 
// a callback function is a function which is passed as argument to another function
// ! ex -> sum , sub , mult

// function sum(p1 , p2){
//     console.log(p1+p2); 
// }
// function sub(p1 , p2){
//     console.log(p1-p2); 
// }
// function mult(p1 , p2){
//     console.log(p1*p2); 
// }

// !8. IIFE function 
// let res = (function sum(a , b){
//    console.log(a+b);
//    return a+b
// })(10 , 12)
// console.log(res);

// ! To avoid global var pollution
// (function sum(){
//     console.log('I am sum function');
// })();
// (function sum(){
//     console.log('Temp Function');
// })()


// !9. NESTED FUNCTION
// if we declare one function inside another function 
// debugger;
// function outer(){
//     console.log('Outer function');
//     return function inner(){
//         console.log('Inner function');
//     }
// }
// let r = outer()
// r()
// ! Ex 2
// debugger;
// function gp(){
//     let gpGold = 50;
//     let gpLand = 40;
//     return function p(){
//         let pGold = 30;
//         let pLand = 60;
//       return function child(){
//             let cgold = 10;
//             let cland = 20;
//             console.log(gpGold+pGold+cgold);    
//         }
    
//     }

// }
// let parent = gp()
// let child = parent()
// child()

// ! closure 
// closure is an object which is created whenever a child function needs the variable from the parent function , the required variable will be stored inside closure , and the closure will be available to the child function even after the execution of parent function.

// function Counter(){
//     let count = 0;
//     return function child(){
//         console.log(count++);
//     }
// }
// let val = Counter()
// val()
// val()
// val()
// val()


// !10. generator function
function * gen(){
   yield 0;
   yield 1;
   yield 2;
   yield 3;
   yield 4;
}
let demo = gen();
console.log(demo.next().value); //0
console.log(demo.next().value); // 1
console.log(demo.next().value); // 2
console.log(demo.next().value); // 3

