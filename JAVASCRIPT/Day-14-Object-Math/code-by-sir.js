console.log(Math);

// ! Properties
// console.log(Math.PI); // 3.14159
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);

// ! Methods 

// ! Math.abs()
// convert all the values to the absolute value
// console.log(Math.abs(-40)); // 40
// console.log(Math.abs(40)); // 40

// ! Math.floor()
// it will return the nearest lowest integer value
// console.log(Math.floor(20.9)); // 20
// console.log(Math.floor(30.5)); // 30

// ! Math.ceil()
// it will return the nearest highest integer value
console.log(Math.ceil(20.9)); // 21
console.log(Math.ceil(30.1)); // 31
console.log(Math.ceil(30.4)); // 31

// ! Math.round()
// it will round off the number to the nearest integer value
// console.log(Math.round(20.9)); // 21
// console.log(Math.round(20.5)); // 21
// console.log(Math.round(20.1)); // 20


// ! Math.trunc()
// it will truncate the floating point values 
// console.log(Math.trunc(30.987)); //30
// console.log(Math.trunc(30.187)); //30

// ! Math.random()
// console.log(Math.random()); // it will generate random numbers b/w 0 to 1
// ! generate 0 to 100
// let number = Math.round(Math.random()*100);
// console.log(number); // 0 to 100
// ! formula to generate a random number b/w a given range 
//! let random = Math.round(Math.random()*(max-min))+min
// let random = Math.round(Math.random()*8999)+1000
// console.log(random);

// ! 
// function getOTP(){
//     let otp = Math.round(Math.random()*8999)+1000
//     alert(`Your otp is : ${otp}`);
//     let confirmOtp = prompt('Please confirm your otp');
//     if(otp == confirmOtp){
//         alert('Login Success')
//     }else{
//      alert('Incorrect OTP')
//     }
// }
// getOTP()

// ! generate a random number & create guessing game

// let random = Math.round(Math.random()*100);
// console.log(random);
// let inp = prompt('Please guess a number b/w 0 to 100')

// if(inp == random){
//     alert('Congrats You won the game')
// }
// if(inp<random){
//     alert('Guess something higher')
// }
// if(inp>random){
//     alert('Guess something lower')
// }

// ! Generate a random rgb color 
// function randomColor(){
//     let r = Math.round(Math.random()*255)
//     let g = Math.round(Math.random()*255)
//     let b = Math.round(Math.random()*255)
//     return `rgb(${r} , ${g} , ${b})`
// }
// console.log(randomColor());






// // ! instantiation of date
// let date = new Date();
// console.log(date);
// // ! getter methods 
// // ! date.getFullYear()
// console.log(date.getFullYear());
// console.log(date.getMonth()); //0(jan)-11(dec) //8 ->sept
// console.log(date.getDay());
// console.log(date.getDate()); //24
// console.log(date.getHours()); //11
// console.log(date.getMinutes()); //23
// console.log(date.getSeconds()); 
// console.log(date.toLocaleDateString()); //9/24/2025     
// console.log(date.toLocaleTimeString()); //11:25:02 AM

// // ! setter Methods 
// let date2 = new Date()
// date2.setFullYear(2020)
// date2.setMonth(10)
// date2.setDate(20)
// date2.setHours(20)
// date2.setMinutes(13)
// console.log(date2);

// ! printing the day and month based on value we are getting from the methods 
// let date  = new Date()
// // date.setMonth(10)
// date.setDate(20)
// let m = date.getMonth()
// let d = date.getDay()
// console.log(m);
// console.log(d);
// let months = ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'june' , 'july' , 'aug' , 'sep' , 'oct' , 'nov' ,'dec']
// let days = ['sun' , 'mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat']
// console.log(months[m]);
// console.log(days[d]);

