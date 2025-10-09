// console.log(`Printing ${1} to ${10}`);

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log(`Printing ${10} to ${1}`);
// for(let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let num = parseInt(prompt('Enter a number: '));
// console.log(`Original num is: ${num}`);
// let temp = num;
// while(temp != 0){
//     let lastDigit = temp % 10;
//     console.log(lastDigit);
//     temp = parseInt(temp/10);
// }

// let num = parseInt(prompt('Enter a number: '));
// let temp1 = num;
// let rev = 0;
// while(temp1 != 0){
//     let lastDigit = temp1 % 10;
//     // console.log(lastDigit);
//     rev = rev*10 + lastDigit;
//     temp1 = parseInt(temp1/10);
// }

// console.log(`Reverse of the ${num} is: ${rev}`);
// if(num == rev){
//     console.log(`${num} is a palindrome number`);
// }else{
//     console.log(`${num} is a not palindrome number`);
// }


// ! WAP to convert Decimal to Binary
// let bin = '';
// let num = parseInt(prompt('Enter a number: '));
// let temp = num;
// while(num != 0){
//     let rem = num % 2;
//     bin = rem + bin;
//     num = parseInt(num/2);
// }
// console.log(`Binary representation of ${temp} is ${parseInt(bin)}`);


// ! WAP to convert Binary to Decimal
let bin = prompt('Enter a number in binary format: ');
