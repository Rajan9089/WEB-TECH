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

// ! 
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
let a = function(){
    console.log('I am anonymous function');
}
a()

// !3. Function Expression
// function expression is a way to store a function as a value inside a variable 
// in a function expression we cannot call the function with function identifier , we can call it only with the help of variable name
let add = function Sum(a , b){
    console.log(a+b);
}
add(10 , 20)
// !4. first class function 
// A function which is treated as a value and stored inside a variable is called as first class function
// ex -> Sum function

// !5. Arrow function
let sqr = a=>a*a;
console.log(sqr(5));
