///!Q5 Funtion to remove duplicates from an array
// function removeDuplicatesCustom(arr) {
//     const uniqueArray = []; // Array to store unique elements

//     for (let i = 0; i < arr.length; i++) {
//         const currentElement = arr[i]; //
//         // Check if the current element is already in the uniqueArray
//         if (!uniqueArray.includes(currentElement)) { //
//             uniqueArray.push(currentElement); // Add if not already present
//         }
//     }
//     return uniqueArray;
// }

// const numbers = [1, 2, 2, 3, 4, 4, 2, 5];
// console.log("Original array:", numbers);
// const uniqueNumbers = removeDuplicatesCustom(numbers);
// console.log("Array after removing duplicates (custom logic):", uniqueNumbers);
// let arr = [2,4,6]


//! Q1 Create an array of 5 numbers and find sum of all elements
// let arr = [2,4,1,2,3]
// let sum = arr.reduce((acc,el)=>{
//     return acc + el;
// },0)
// console.log(sum); // 12

//!2 write a function that removes all occurrences of a specific elements from an array
// let input = [1,2,3,2,5]
// let target = 2;
// let res = input.filter((el)=>{
//     return el != target;
// })
// console.log(res); // (3) [1, 3, 5]
//!Q5 Funtion to remove duplicates from an array
// let input = [1,2,2,3,4,4]
// let res = input.filter((el,i)=>{
//     return input.indexOf(el) === i;
// })
// console.log(res); // (4) [1, 2, 3, 4]

//!7 function to find 2nd larget element in an array
// input = [1,2,2,3,2,4]

// !8 function to check if an array contains a specific element
// let arr = [10,5,30,50,20]
// let element = 30;
// if(arr.includes(element)){
//     console.log(true);
// }else{
//     console.log(false);
// }











// !14 write a function that flattens a multi-dimensional array (2-d array) into a single array
// let input = [[1, 2, 3], [4, 5], [6]];
// function flattenArray(arr) {
//     return arr.flat();
// }
// console.log(flattenArray(input)); // [1, 2, 3, 4, 5, 6]















// let flattenArray = input.reduce((acc,el)=>{
//     return acc.concat(el);
// },[])
// console.log(flattenArray); // (6) [1, 2, 3, 4, 5, 6]


// function flattenArray(input) {
//     let res = input.reduce((acc, el) => {
//         return acc.concat(el);
//     }, []);
//     return res;
// }

// let input = [[1, 2, 3], [4, 5], [6]];
// let flattens = flattenArray(input);
// console.log(flattens); //(6) [1, 2, 3, 4, 5, 6]










//!15 function that rotates the elements of an array by a specified number of positions
let input = [1, 2, 3, 4, 5]
let rotate = 2;

function rotateArray(arr, k) {
    k = k % arr.length; // in case k > length
    return arr.slice(-k).concat(arr.slice(0, -k));

    // also can be done like this
    // k = k % arr.length;
    // let part = arr.splice(-k);
    // return part.concat(arr);

}
console.log(rotateArray(input, rotate)); // [4, 5, 1, 2, 3]









//!10 write a function to merge two array into single array
let input1 = [1, 2, 3];
let input2 = [4, 5, 6];
let output = input1.concat(input2);
console.log(output);  // (6) [1, 2, 3, 4, 5, 6]












// function merge(input1, input2) {
//     let op = [];
//     let i = 0, j = 0;

//     // Merge both arrays while elements remain in both
//     while (i < input1.length && j < input2.length) {
//         if (input1[i] <= input2[j]) {
//             op.push(input1[i]);
//             i++;
//         } else {
//             op.push(input2[j]);
//             j++;
//         }
//     }

//     // Add any leftover elements from input1
//     while (i < input1.length) {
//         op.push(input1[i]);
//         i++;
//     }

//     // Add any leftover elements from input2
//     while (j < input2.length) {
//         op.push(input2[j]);
//         j++;
//     }

//     return op;
// }
// let ans = merge(input1, input2);
// console.log(ans);












