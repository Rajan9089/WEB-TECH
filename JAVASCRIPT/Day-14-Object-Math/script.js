// console.log(Math);


// function getOTP(){
//     let otp = Math.round(Math.random()*(8999-0)) + 1000;
//     // console.log(otp , randomOtp);
//     alert(`your otp is : ${otp}`);
//     let confirmOtp = prompt("enter  your otp: ");
//     if(otp == confirmOtp){
//         console.log('success');
//     }else{
//         console.log('Failure');
//     }
// }
// getOTP();


//! Generate a random rgb colour
// function randomColor(){
//     let r = Math.round(Math.random()*255);
//     let g = Math.round(Math.random()*255);
//     let b = Math.round(Math.random()*255);
//     return `rgb(${r},${g},${b})`
// }
// console.log(randomColor());


// let date = new Date();
// console.log(date.getFullYear());
// let month = date.getMonth();
// console.log(month);
// let arr = ['January', 'Febuary','March','April','May','June','July','August','September','October','November','December'];
// console.log(arr[month]);


// let day = date.getDay();
// console.log(day);
// let dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
// console.log(dayArr[day]);



let random = Math.round(Math.random() * 100);

alert(`random no is: ${random}`);
while (true) {
    let inp = prompt('Please guess a number b/w 0 to 100')

    if (inp == random) {
        alert('Congrats You won the game')
    }
    else if (inp < random) {
        alert('Guess something higher')
    }
    else if (inp > random) {
        alert('Guess something lower')
    }else{
        alert('Enter valid number');
    }
}


