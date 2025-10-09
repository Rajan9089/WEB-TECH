// ! Array 
// ! Ways to create an array 
//  1 . by using array literal ([])
// let arr = [];
// let nums = [10 , 20 , 30 , 40]
// console.log(arr);
// console.log(nums);
// let temp = [];
// temp[0] = 10
// temp[5] = 50;
// console.log(temp);

// ! CRUD over the array 
// ! Read 
// let names = ['Akshay' , 'Atul' , "Pranav" , "Vishal"]
// console.log(names[2]);
// // ! Update 
// names[3] = 'Harish Sir'
// names[0] = 'Gaurav Sir'
// console.log(names);
// // ! Delete 
// delete names[2]
// console.log(names);

// 2. by using constructor 
// let arr2 = new Array(5)
// console.log(arr2);

// if we pass a single numeric arg to the array constructor it will take that as size of the array 
// let arr3 = new Array('5')
// console.log(arr3);

// let arr4 = new Array(5 , 10)
// console.log(arr4.length);


// ! properties and methods
// properties
// length 
// it will return the number of elements present inside the array 


// ! methods 
// mutable methods 
// mutable methods are those methods which modifies the original array
// let arr = [10 , 20 , 30 , 40]
// ! 1. push()
// push is used to add the elements at the last of the array 
// arr.push(90 , 100 , 110)
// console.log(arr);
// ! 2. pop()
// it will remove a single element from the last of the array 
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);
// ! 3. shift()
// shift is used to remove the element from the 0th index of the array 
// arr.shift()
// arr.shift()
// console.log(arr);

// ! 4. unshift()
// unshift is used to add the elements at the beginning of the array 
// arr.unshift(2,3,4,5)
// console.log(arr);

// !10 splice(s.i , deleteCount , newEl1 , newEl2 ..... newEln)
// splice is used to add or remove the elements at a specific index of the array
// it will accept the first argument as the s.i
// 2nd arg is deleteCOunt -> the number of element we want to delete
// the next argument will be the elements we want to add
// it will modify the original array
// let arr = [40 , 50 , 90 , 10 , 20 , 60];
// arr.splice(1,3); 
// console.log(arr);//(3) [40, 20, 60]
// arr.splice(1 ,0 , 4,5,6);
// console.log(arr); //(6) [40, 4, 5, 6, 20, 60]
// arr.splice(1 , 2 , 10);
// console.log(arr);


// ! immutable 
// the methods will not modify the original array 
// !5. at(index)
// at will return the element present at a specific index , we can pass negative index also
// let arr = [10 , 20 , 30 , 40 , 10 , 20]
// console.log(arr.at(0));
// console.log(arr.at(-1));

// !6. includes(element)
// includes is used to identify if an element is present inside the array or not 
// includes will return a boolean value , it will return true if the element is present inside the array 
// console.log(arr.includes(20)); // true
// console.log(arr.includes(60)); // false

// !7. indexOf()
// it will return the index of the first occurrence of the element
// console.log(arr.indexOf(10)); // 0
// !8. lastIndexOf()
// it will return the index of the last occurrence of the element
// console.log(arr.lastIndexOf(10)); // 4

// !9. slice(s.i , e.i)
// it is used to extract an specific part of the array and it will return a new array 
// e.i will be excluded
// let arr = [10 , 20 , 30 , 40 , 10 , 20]
// let sub = arr.slice(1, 5)
// console.log(sub); //(4) [20, 30, 40, 10]


// !11. reverse()
// reverse is used to reverse the elements of the array 
// it will modify the original array
// let arr = [10 , 20 , 30 , 40]
// arr.reverse()
// console.log(arr);

// ! question
// ! 1. reverse the words of the string without using a loop
// ! 'this is java' -> 'java is this'
// let str = 'this is java';
// let words = str.split(' ')
// words.reverse()
// console.log(words);

// ! 2. reverse the letters of the string without using a loop
//  'this is java' -> 'avaj si siht'
// let str = 'this is java';
// let letters = str.split(' ');
// letters.reverse()
// console.log(letters);
// console.log(letters.join(' '));


// ! 12. toString()
// it will convert any data type into string
// let arr = [10  , 20 , 30 , 40]
// let res = arr.toString() // '10,20,30,40'
// console.log(res);

// !13. join('sep')
// join is used to convert an array into string based on the argument
// let op = arr.join(' ')
// console.log(op); //'10 20 30 40'

// ! Ques -> reverse a string without using a loop
// let str = 'this is java';
// let rev = str.split(' ').reverse().join(' ')
// let rev1 = str.split('').reverse().join('')
// console.log(rev);
// console.log(rev1);

// !14. sort()
// sort is used to sort the elements of the array in ascending or descending order
// let nums = [ 9 , 2 , 10 , 100 , 200]
// nums.sort()
// console.log(nums);
// ! compare fn 
// nums.sort((a , b)=>{
//     return a-b ; // ascending
// })
// nums.sort((a , b)=>{
//     return b-a ; // descending
// })
// console.log(nums);
// !Ques-> take input from the user as two words and check if they are anagram or not (without loop)
// ! elbow -> below
// ! eat -> tea

let str1 = 'Adady'
let str2 = 'addyA'

// let op1 =  str1.split('').sort().join('');
// let op2 = str2.split('').sort().join('');
// console.log(op1); // Aaddy
// console.log(op2); // Aaddy

// function isAnagram(s1, s2) {
//     if (s1.length != s2.length) {
//         return false
//     }
//     let op1 = s1.split('').sort().join('');
//     let op2 = s2.split('').sort().join('');
//     if (op1 == op2) {
//         return true
//     } else {
//         return false
//     }
// }
// if (isAnagram(str1, str2)) {
//     console.log(`${str1} and ${str2} are anagrams`);
// }
// else {
//     console.log(`${str1} and ${str2} are not anagrams`);
// }

//! https://codeshare.io/2WmgAM

// ! Advance Methods of the array 
// ! forEach , map , filter , reduce , reduceRight() , some() , find() , every() ....;
// ! Advance methods of the array accepts a callback function and that callback function will be executed for each element of the array 
// ! that callback function has 3 parameters ->
// the parameters are optional
//  i. iterating variable -> it will iterate through all the elements of the array 
// ii. index -> it will iterate through all the index (0 , 1 , 2 ...)
// iii. actual array -> the third parameter represents the actual array
// (el , i , arr)=>{

// }
// ! forEach(callbackFn..)
// forEach is an advance method of the array , it will accept a callback function 
// forEach does not return anything as output , it will work like a loop
// let arr = [10 , 20 , 30 , 40]
// let res = arr.forEach((el , i)=>{
//     console.log(el , i);
// })
// console.log(res);

// ! some(callbackFn..)
// some is an advance method of the array which accepts a callback function 
// it will return a boolean value (true/false)
// it will check if any element of the array satisfies the condition we have returned from the callback function 
// if any element of the array satisfies the condition it will return true , otherwise false
// let arr = [20 , 30 , 42 , 64]
// let arr = [0  , '' , undefined , null]
// let res  = arr.some((el , i )=>{
//     console.log(i+1);
//      return el;
// })
// console.log(res);

// ! every(callbackFn..)
// every is an advance method of the array which accepts a callback function 
// it will return a boolean value (true/false)
// it will check if all the element of the array satisfies the condition we have returned from the callback function 
// if all element of the array satisfies the condition it will return true , otherwise false
// let arr = [21 , 30 , 42 , 64]
// let res  = arr.every((el , i )=>{
//     console.log(i+1);
//      return el%2 ==0;
// })
// console.log(res);

// ! find(callbackFn..)
// find is an advance method of the array which accepts a callback function 
// it will return a single element 
// it will check if any element of the array satisfies the condition we have returned from the callback function 
// if any element of the array satisfies the condition it will return that element , otherwise it will return undefined
// let arr = [21 , 31 , 42 , 64]
// let res  = arr.find((el , i )=>{
//     console.log(i+1);
//      return el%2 == 0;
// })
// console.log(res);

// ! map(callbackFn..)
// map is an advance method of the array which accepts a callback function 
// it will return an array with updated elements
// it will update all the elements of the array based on the expression we have return from the callback function
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
//      return el * el *el
// })
// console.log(res);
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
// })
// console.log(res); //[undefined, undefined, undefined, undefined]

// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
//     return el%2 == 0
// })
// console.log(res); //(4) [true, true, false, true]

// ! filter(callbackFn..)
// filter is an advance method of the array which accepts a callback function 
// filter is used to filter the array elements based on the condition
// it will return an array with all the element which satisfies the condition
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.filter((el , i )=>{
//      return el%2==0;
// })
// console.log(res); // [4, 6, 12]
// let res  = arr.filter((el , i )=>{
//      return el*el;
// })
// let res  = arr.filter((el , i )=>{
// })
// console.log(res); // []
// let res  = arr.filter((el , i )=>{
//     return el;
// })
// console.log(res); // []
// ! Question 
// let arr = ['virat' , 200 , '' , null , undefined , NaN , 0 , 0n , false , true]
// let res = arr.filter((el ,i)=>{
//     return el;
// })
// console.log(res); // [ 'virat', 200, true ]

// ! convert all the names to Capitalize
// let names = ['atul' , 'pranav' , 'vishal' , 'ritesh','akshay'];
// let res = names.map((el)=>{
//     return el.charAt(0).toUpperCase()+el.slice(1).toLowerCase()
// })
// console.log(res);

// ! filter those names which are starting with a vowel
// let names = ['Atul' , 'pranav' , 'vishal' , 'ritesh','akshay'];
// let vowelNames = names.filter((el)=>{
//      return 'aeiou'.includes(el.charAt(0).toLowerCase())
// })
// console.log(vowelNames);

// ! filter those names which are ending with a vowel
// let names = ['Atulya' , 'pranava' , 'vishal' , 'ritesh','akshay'];
// let vowelNames = names.filter((el)=>{
//      return 'aeiou'.includes(el.at(-1).toLowerCase())
// })
// console.log(vowelNames);


// ! increment all the sal by 10%
// let sal = [30000 , 10000 , 70000 , 20000 , 100000];
// let res = sal.map((el)=>{
//     return el + el*0.1
// })
// console.log(res);

// ! Ques -> reverse the characters of all names 
// let names = ['Atulya' , 'pranava' , 'vishal' , 'ritesh','akshay'];
// let reversedNames = names.map((el)=>{
//     return el.split('').reverse().join('')
// })
// console.log(reversedNames);


// ! Ques -> filter all the files related to web technology
// let files = ['index.html' , 'script.js' , 'docs.docx' , 'demo.txt' , 'hello.java' , 'first.c' , 'style.css' , 'resume.pdf' , 'data.json']

// let webFiles = files.filter((el)=>{
//     return el.endsWith('html') || el.endsWith('css') || el.endsWith('js') || el.endsWith('json')
// })
// console.log(webFiles);


// ! Ques -> filter all the numeric values;
// let values = ['1a23' , 10 , '231a' , 30 , 70 , '70']
// let numerics = values.filter((el)=>{
//     return typeof el == 'number'
// })
// console.log(numerics);

// ! Homework
// ! Ques 2 -> filter those names which are having length more than 6
let names = ['Atulyaa', 'pranava', 'vishal', 'ritesh', 'akshay'];
// ! Ques 2 -> filter those names which starts and ends with a vowel
// ! Ques 3 -> suppose there is an array of all the price of the items in the cart
// we have to give 20% discount on each item , after that if any item has price>10000 ,than we have to give again discount of 10%
// let price = [15000 , 8000 , 9000 , 2000]
// ! Ques 4 -> return the length of all the names in a new array
// ! Ques 5 ->  
