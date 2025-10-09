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
// let arr = [10 , 20 , 30 , 40]
// let res = arr.toString()
// console.log(res);    

// !13. join('sep')
// join is used to convert an array into string based on the argument
// let op = arr.join(' ')
// console.log(op); //'10 20 30 40'

// ! Ques -> reverse a string without using a loop
let str = 'this is java';
let rev = str.split(' ').reverse().join(' ')
let rev1 = str.split('').reverse().join('')
console.log(rev);
console.log(rev1);

// ! sort()
// sort is used to sort the elements of the array in ascending or descending order
let nums = [ 9 , 2 , 10 , 100 , 200]
nums.sort()
console.log(nums);
// ! compare fn 
nums.sort((a , b)=>{
    return a-b ; // ascending
})
nums.sort((a , b)=>{
    return b-a ; // descending
})
console.log(nums);
// ! take input from the user as two words and check if they are anagram or not (without loop)
// ! elbow -> below
// ! eat -> tea






