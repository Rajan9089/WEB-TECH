// console.log('Hello');
// setTimeout(()=>{
//  console.log('setTimeout');
// })
// console.log('Bye');
// for(let i = 0; i<=100000; i++){
//     console.log(i*2);
// }
// ! Promise 
// Promise is an object in js , which is used to handle the eventual completion or failure of an asynchronous operation
// Promise acts like a placeholder for a value which might not be immediately available

// ! Promise has 3 states
// ! 1. pending -> the promise is neither resolved nor rejected 
// ! 2. fulfilled -> we receive the data successfully
// ! 3. rejected -> the data is not received

// ! Promise consuming / handling methods 
// ! 1. then(callback fn.) ->it will be executed when promise is resolved
// ! 2. catch(callback fn.) -> it will be executed when promise is rejected
// ! 3. finally(callback fn.) -> it will be executed in both the cases 

// let p = new Promise((res , rej)=>{
// })
// console.log(p); //Promise {<pending>}

// let p = new Promise((res , rej)=>{
//     res('Hello this is the data')
// })
// console.log(p); //Promise {<fulfilled>: 'Hello this is the data'}

// let p = new Promise((res , rej) =>{
//     rej('this is an error')
// })
// console.log(p); //Promise {<rejected>: 'this is an error'}


// ! promise same as that of sent by the server 
// let p1 = new Promise((res , rej)=>{
//     let random = Math.round(Math.random()*10)
//     setTimeout(()=>{
//            if(random>5){
//             res('This is the data')
//            }else{
//             rej('This is the error')
//            }
//     },5000)
// })
// console.log(p1);
// p1.then((data)=>{
//     console.log(data); 
// })
// p1.catch((err)=>{
//     console.log(err); 
// })
// p1.finally(()=>{
//     console.log('Finally');

// })
// console.log('End');



// ! Promise chaining
// its a way to handle multiple promise one after another as a chain
// let p1 =  new Promise((res , rej)=>{
//     res(50)
// });
// p1.then((a)=>{
//    console.log(a);
//    return 20; // it is a promise 
// }).then((b)=>{
//    console.log(b);
//    return 10;
// }).then((c)=>{
//     console.log(c);
// })

/* output

50
20
10
*/

// ! async await
// async and await are the keywords in js 
// ! async
// async keyword is used before the function declaration 
// it is used to create an asynchronous function
// async function will always return a promise 
// if a asyns function returns non-promise data, it will wrap that into a promise then return it.
// async function getData(){
//     return 20;
// }
// console.log(getData()); // Promise { 20 }


// ! await 
// await keyword can be only used in async function , await is used to consume the promise
// await keyword will pause the execution of the function , until the promise is resolved or rejected 

// let p1 =  new Promise((res , rej)=>{
//     res(50)
// });
// console.log('Before function');
// async function fun() {
//     console.log('In function');
//     let res = await p1;
//     console.log('at the last of Function ');
// }
// fun()
// console.log('After function');
// for (let i = 0; i<=100000; i++) {
//    console.log(i);
// }

// ! JSON
// It is a lightweight medium to store and interchange the data between client and server
// let jsonObj = `{
//     "name":"abc",
//     "age":50,
//     "skills":[],
//     "hobbies":{},
//     "isMarried" : true,
//     "kids":null
// }`
// console.log(jsonObj);
// ! 1. JSON.parse(jsonObj)
// this method converts json obj into js object 
// let a = JSON.parse(jsonObj)
// console.log(a);
// ! 2. JSON.stringify(jsObj)
// it will convert js object to json object 
// let json2 = JSON.stringify(a)
// console.log(json2);


// ! AJAX
// Asynchronous js and xml->json 
// ajax is a technique to update a specific part of the webpage without a full page reload
// mostly it is used in single page web app

// ! fetch('api')
// fetch is the method given by browser 
// we can make httpRequests by using fetch method 

// let p = fetch('https://fakestoreapi.com/products')
// // fetch returns a promise
// console.log(p);
// p.then((res)=>{
//     // after consuming that promise we get response object 
//     // response object contains a method called as json()
//     // if we use json method it will return a promise 
//    return res.json(); // it returns a promise 
//     //that promise we can handle by promise chaining
// }).then((data)=>{
//    console.log(data);
// }).catch((err)=>{
//     log(err)
// })

/*
Promise {<pending>}
(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/
// ! step 1 -> fetch will return a promise 
// ! step 2 -> if we consume that promise we will get response object 
// ! step 3 -> response object contains a method called as json()
// ! step 4 -> If we call that method it will again return a promise 
// ! step 5 -> that promise we can handle by using promise chaining ,
// we can return the res.json() (promise) from first then block and we can consume that in next than block 


// ! fetching an api by using async await 
// async function getData() {
//     try {
//         let res = await fetch('https://fakestoreapi.com/products')
//         let data = await res.json()
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// getData()

