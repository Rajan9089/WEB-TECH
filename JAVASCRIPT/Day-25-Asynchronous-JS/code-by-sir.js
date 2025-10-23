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

// let p = new Promise((res , rej)=>{
//     rej('this is an error')
// })
// console.log(p); //Promise {<rejected>: 'this is an error'}


// ! promise same as that of sent by the server 
let p1 = new Promise((res, rej) => {
    let random = Math.round(Math.random() * 10)
    setTimeout(() => {
        if (random > 5) {
            res('This is the data')
        } else {
            rej('This is the error')
        }
    }, 5000)
})

console.log(p1);
p1.then((data) => {
    console.log(data);
})
p1.catch((err) => {
    console.log(err);
})
p1.finally(() => {
    console.log('Finally');

})
console.log('End');