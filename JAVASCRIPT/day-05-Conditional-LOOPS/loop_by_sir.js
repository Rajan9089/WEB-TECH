// ! for loop
// for(let i = 10; i>=0; i--){
//     console.log(i);
// }

// ! while
// let num = temp = 151;
// let rev = 0;
// while(num != 0){
//   let ld = num%10;
//   console.log(ld);
//   rev = rev*10+ld;
//   num = parseInt(num/10)
// }
// console.log(`The reverse of the number ${temp} is ${rev}`);
// if(temp === rev){
//     console.log('Palindrome');
// }else{
//     console.log('Not a Palindrome');
// }

// ! do while
// do{

// }while(condition);

// ! decimal to binary ;
let binary = '';
let num = temp = parseInt(prompt('Enter a number'));
while(num != 0){
    let rem = num%2;
    binary = rem+binary;
    num = parseInt(num/2)
}
console.log(`The binary of ${temp} is ${binary}`);
