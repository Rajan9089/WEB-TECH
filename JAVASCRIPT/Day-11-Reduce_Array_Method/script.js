
// let arr = [10,20,30,40]
// let temp = arr.reduce((acc , el)=>{
//     console.log(acc , el);
//     return acc + el;
// })
// console.log(temp);


// let temp1 = arr.reduce((acc , el , i , arr)=>{
//     console.log(acc , el);
//     return 0;
// })
// console.log(temp1);

// let temp3 = arr.reduce((acc , el , i , arr)=>{
//     console.log(acc , el);

// })
// console.log(temp3);  // undefined

// let temp2 = arr.reduce((acc , el , i)=>{
//     console.log(acc , el);
//     return acc + el;
// } , 500)
// console.log(temp2);


// let temp4 = arr.reduce((acc , el , i)=>{
//     console.log(acc , el);
//     return acc + el;
// } , 0)
// console.log(temp4);

// let PROD = arr.reduce((acc , el , )=>{
//     console.log(acc , el);
//     return acc * el;
// } ,1)
// console.log(PROD);





// let nums = [10,20,30,40];
// let res = nums.reduceRight((acc , el)=>{
//     console.log(acc , el);
//     return acc + el;
// })
// console.log(res);

// let str = 'Hey Hello Hii';
// console.log(str);

// let strArr = str.split(' ');
// // (3) ['Hey', 'Hello', 'Hii']
// console.log(strArr);
// let res = strArr.reduceRight((acc , el)=>{
//     return acc +' '+ el;
// })
// console.log(res);


// let str1 = "this is javascript we are learning";
// let str1Array = str1.split(' ');
// console.log(str1Array);     // (7) ['this', 'is', 'javascript', ',', 'we', 'are', 'learning']

// let res1 = str1Array.reduce((acc, el) => {

//     // if (acc.length > el.length) {
//     //     return acc;
//     // } else {
//     //     return el;   
//     // }

//     return (acc.length <  el.length) ? acc : el;
    
// })
// console.log(res1);

//! sum of even number
// let nums = [1,2,3,4,5,6,7,8,9];
// let res = nums.reduce((acc , el)=>{
//     // console.log(acc , el);
//     if(el % 2 == 0){
//         return acc + el;
//     }else{
//         return acc;
//     }
// } , 0)
// console.log(res);

// ! some(callbackFn..)
// some is an advance method of the array which accepts a callback function 
// it will return a boolean value (true/false)
// it will check if any element of the array satisfies the condition we have returned from the callback function 
// if any element of the array satisfies the condition it will return true and come out of the loop, otherwise false

// let arr = [20 , 30 , 42 , 64]
// let arr = [0  , '' , undefined , null]
// let res  = arr.some((el , i )=>{
//     console.log(i+1);
//     return el;
// })
// console.log(res);


// ! every(callbackFn..)
// every is an advance method of the array which accepts a callback function 
// it will return a boolean value (true/false)
// it will check if all the element of the array satisfies the condition we have returned from the callback function 
// if all element of the array satisfies the condition it will return true , otherwise false

// let arr = [21 , 30 , 42 , 64]
// let arr = [20 , 30 , 42 , 64]
// let res  = arr.every((el , i )=>{
//     console.log(i+1);
//     return el%2 ==0;
//     // return 0;
//     // return 1;
    
// })
// console.log(res);


// ! find(callbackFn..)
// find is an advance method of the array which accepts a callback function 
// it will return a single element 
// it will check if any element of the array satisfies the condition we have returned from the callback function 
// if any element of the array satisfies the condition it will return that element , otherwise it will return undefined
// let arr = [21 , 31 , 42 , 64]
let arr = [21 , 31 , 43 , 65]
let res  = arr.find((el , i )=>{
    console.log(i+1);
    return el%2 == 0;
})
console.log(res);








