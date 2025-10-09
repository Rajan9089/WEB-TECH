// let username = prompt('Enter your name: ');
// // let username = 'rohit';
// username = username.toLowerCase();


// let firstChar = username.charAt(0);
// let remStr = username.slice(1);
// console.log( (firstChar.toUpperCase() + remStr) );
// console.log( (firstChar + remStr.toUpperCase()) );
// console.log(username.toUpperCase());


//! custom function to CAPITALIZE a string
let str = 'custom function to capitalize a string';
function toCapitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(toCapitalize(str));


let arr = str.split(' ');
console.log(arr);

for(let i = 0; i < arr.length; i++) {
    arr[i] = toCapitalize(arr[i]);
}
console.log(arr);

// console.log(toCapitalize(str));


// let username = prompt('Enter you name: ');
// let fc = username.charAt(0);
// if('aeiou'.includes(fc.toLowerCase())){
//     console.log(`The name ${username} starts with vowel character`);   
// }else {
//     console.log(`The name ${username} does not starts with vowel character`);
// }

