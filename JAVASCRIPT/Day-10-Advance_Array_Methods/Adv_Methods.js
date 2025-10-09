//  let names = ['akshay' , 'atul' , 'pranav']
//  console.log(names);
 
// function toCapitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// let res = names.map((el , i) =>{
//     return toCapitalize(el);
// })
// console.log(res);

// ! filter those names starting with vowels character
// let names = ['Atulyaa', 'pranava', 'vishal', 'ritesh', 'akshay'];

// function isVowel(str){
//     if('aeiou'.includes(str.charAt(0).toLowerCase())){
//         return true;
//     }else{
//         return false;
//     }
// }
// let res = names.filter((el , i)=>{
//     // return isVowel(el);
//     return 'aeiou'.includes(el.charAt(0).toLowerCase());
// })
// console.log(res);

// let res1 = names.filter((el)=>{
//     return 'aeiou'.includes(el.at(-1).toLowerCase());
// })
// console.log(res1);



// !dec all the sal by 10%
// let sal = [30000 , 10000, 70000, 20000, 100000];

// let res = sal.map((el)=>{
//     let newEl = el - el/10;
//     return newEl;
// })

// console.log(res);


// ! reverse all the characters of all names
// let names = ['akshay' , 'atul' , 'pranav' , 'vishal', 'ritesh', 'umesh']
// console.log(names);

// let res = names.map((el )=>{
//     return el.split('').reverse().join('');
// })
// console.log(res);

// ! filter all the web tech related files
// let files = ['index.html' , 'script.js' ,'docs.docx' , 'hello.java' , 'data.json', 'resume.pdf', 'style.css'];

// let web = ['html' , 'css' , 'js', 'json'];
// let temp = 'htmlcssjsjson';
// let res = files.filter((el)=>{
//     let index = el.split('').indexOf('.');      
//     return temp.includes(el.slice(index+1));

//     // return el.endsWith('html') || el.endsWith('css') || el.endsWith('js') || el.endsWith('json');
// })
// console.log(res);

// ! filter all the numeric values
// let values = ['1a23' , 10 , '321a' , 330 , 60 , '40'];
// let numerics = values.filter((el) =>{
//     return typeof el == 'number';
// })
// console.log(numerics);


// ! Homework
// ! Ques 2 -> filter those names which are having length more than 6
// let names = ['Atul', 'pranava', 'vishal', 'ritesh', 'akshay', 'Rmayana'];
// let res = names.filter((el)=>{
//     return el.length > 6;
//     // if(el.length > 6){
//     //     return el;
//     // }
// })
// console.log(res);


// ! Ques 2 -> filter those names which starts and ends with a vowel

// let names = ['Bipul', 'Aarav', 'avishalu', 'ritesh', 'akshaya', 'Abhimanyu'];
// let res3 = names.filter((el)=>{
//     return 'aeiou'.includes( (el.charAt(0).toLocaleLowerCase()) && (el.at(-1).toLocaleLowerCase()) );
// })
// console.log(res3);


// ! Ques 3 -> suppose there is an array of all the price of the items in the cart
// we have to give 20% discount on each item , after that if any item has price>10000 ,than we have to give again discount of 10%
// let price = [15000 , 8000 , 9000 , 2000]
// console.log(price);

// let res1 = price.map((el)=>{
//     let firstDiscount = el - el*0.2;
//     if(firstDiscount > 10000){
//         firstDiscount = firstDiscount - firstDiscount*0.1;
//     }
//     return firstDiscount;
// })
// console.log(res1);



// ! Ques 4 -> return the length of all the names in a new array
// let names = ['Atul', 'pranava', 'vishal', 'ritesh', 'akshay', 'Rmayana'];
// let res2 = names.map((el)=>{
//     return el.length;
// })
// console.log(res2);

// ! Ques 5 ->  
























