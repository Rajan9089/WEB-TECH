
// ! 1. with strings
// let str = 'javascript'
// console.log(...str);  // j a v a s c r i p t
// console.log('j','a','v','a','s','c','r','i','p','t');  // j a v a s c r i p t

//! convert an string into array
// console.log([...str]); // (10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// ! 2. with array
// let arr = [10,20,30];
// let arr2 = [40,50,60];
// let res = arr.concat(arr2);
// console.log(res);  // (6) [10, 20, 30, 40, 50, 60]

// ! Shallow copy

// let a = [10,20,30];
// let b = [...a]
// console.log(a); // (3) [10, 20, 30]
// console.log(b); // (3) [10, 20, 30]

// a.shift()
// b.push(90)
// console.log(a); // (2) [20, 30]
// console.log(b); // (4) [10, 20, 30, 90]

// ! SHALLOW COPY

// let arr = [10,20,{name:'a'}, [80]];
// let arr2 = [...arr];
// console.log(arr); // (4) [10, 20, {…}, Array(1)]
// console.log(arr2); // (4) [10, 20, {…}, Array(1)]

// arr2[1] = 50;
// arr2[2].name = 'b';
// console.log(arr); // (4) [10, 20, {…}, Array(1)] //  2: {name: 'b'}
// console.log(arr2); // (4) [10, 50, {…}, Array(1)]  //  2: {name: 'b'}


// ! Deep copy

// let arr = [10,20,{name:'a'}, [80]];
// let arr2 = JSON.parse(JSON.stringify(arr));

// arr2[1] = 50;
// arr2[2].name = 'abc';
// console.log(arr);  //  (4) [10, 20, {…}, Array(1)] //  2: {name: 'a'}
// console.log(arr2); // (4) [10, 50, {…}, Array(1)] //  2: {name: 'abc'}


// ! spread with object 
// let obj1 = {
//   name:'a',
//   age:40
// }
// let obj2 = {
//   age:50,
//   city:'Bangalore'
// }
// let res = {...obj1 , ...obj2}
// console.log(res);  // {name: 'a', age: 50, city: 'Bangalore'}

// let details = {name:'abc' , age:40 , place:'Bangalore' , passsword:123}
// console.log({...details , passsword:'abc@123'});  // {name: 'abc', age: 40, place: 'Bangalore', passsword: 'abc@123'}



let arr = [10,20,{name:'a'}, [80]];
// console.log(arr);  // (4) [10, 20, {…}, Array(1)]

// let arr2 = JSON.parse(JSON.stringify(arr));
// console.log(arr2);  // (4) [10, 20, {…}, Array(1)]



let res = JSON.stringify(arr);
console.log(res);  // [10,20,{"name":"a"},[80]]   // converted to json
let res2 = JSON.parse(res);
console.log(res2); // (4) [10, 20, {…}, Array(1)] // convert to js 







