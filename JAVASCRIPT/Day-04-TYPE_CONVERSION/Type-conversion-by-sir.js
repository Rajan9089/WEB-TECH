console.log('Type conversion in js');

// let username = prompt('Enter your name: ')
// console.log(username);
// console.log(typeof username);

// ! calculating the sum of two numbers taken as input from user
// let num1 = prompt('Enter num 1')
// let num2 = prompt('Enter num 2')
// console.log(Number(num1)+Number(num2));
// console.log('50');
// console.log(50);


// ! Kilogram to gram
// let kgs = prompt('Enter the weight');
// console.log('Number Function ' , Number(kgs));
// console.log('parseInt function ', parseInt(kgs));
// console.log('The weight in grams is ' , parseInt(kgs)*1000 ,'grams');


// ! Boolean()
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));
// console.log(Boolean(false));

// console.log(Boolean('Akshay'));
// console.log(Boolean(20));


// ! Truthy and falsy values 
// ! in js if we use a value in place of a boolean context , that value will be evaluated to true or false based on truthy or falsy 

// ! falsy values
// false
// 0
// 0n
// null
// undefined
// ''
// NaN

// ! truthy values -> Every value other than falsy values 

// ! logical operators 

// console.log(10 && 20); // 20
// console.log(0 && 20); // 0
// console.log(20 && 0); // 0

// let username = prompt('Enter your name');

// let age = username && prompt('Enter your age');
// console.log(username , age);

// if(username){
//     let age = prompt('Enter the age also')
//     console.log(username , age);
// }

// ! 
console.log( 0 || 10); // 10
console.log( 0 && 10); //0

// console.log('Rohit' || 'Guest'); //'Rohit'
// console.log('' || 'Guest'); // 'Guest'


// let username = prompt("Enter your username");
// console.log('Hello , ' ,username || 'Guest' );

// if(username){
//     console.log('Hello ,' , username);
// }
// else{
//     console.log(`Hello , Guest`);
// }

// ! String interpolation
// let user = 'ABC'
// let age = 23;


// let num1 = parseInt(prompt("Enter number 1"))
// let num2 = parseInt(prompt("Enter number 2"))

// console.log('Name is' , user , ' age is ',age);
// console.log(`Name is ${user} age is ${age} `);
// console.log(`Num1 is ${num1} and num2 is ${num2} and mult is ${num1+num2}`);

// ! 
// let age = parseInt(prompt('Enter your age'));
// let msg = `I would like to have a glass of ${age>18?'something':'milk'}`
// console.log(msg);

// let msg1 = (age>18 && 'something') || 'milk'



