// console.log('Objects Learning');
// //! ways to create an objects
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav no.'
// }

// console.log(p1.pname); // MSD
// console.log(p1.team);  // CSK
// //! console.log(p1.7); /// error
// console.log(p1['7']); // fav no.

//! CRUD over Objects
// ! Create
// let obj = {};

// ! Update
// obj.name = 'Kumar';
// obj.place = 'Kerala';
// obj.hobby = 'Scrolling'
// console.log(obj);
// obj.status = 'Offline';
// console.log(obj);

// obj.status = 'Online';
// console.log(obj);

// // ! delete
// delete obj.status
// console.log(obj);




//! Object methods
//! 1. Object.keys(obj)
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav no.'
// }
// console.log(Object.keys(p1));  // (5) ['7', 'pname', 'jNo', 'team', 'isMarried']

// ! 2. Object.values(obj)
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav no.'
// }
// console.log(Object.values(p1)); // (5) ['fav no.', 'MSD', 7, 'CSK', true]


//! Object.entries(obj)
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav no.'
// }
// console.log(Object.entries(p1)); //  (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]


//! Object.seal(obj)
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav no.'
// }
// Object.seal(p1);
// p1.pname = 'Kohli';
// console.log(p1);




// ! Methods 
// A method is function which is declared inside the object 



// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// function fun(){
//     console.log(this); //it will point to window
// }
// fun()  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window.fun()  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// let pname = 'Varun'
// let age = 40

// let obj = {
//     pname: 'A',
//     age: 30,
//     details: function () {
//         console.log(`Name is ${this.pname} , age is ${this.age}`);
//         console.log('Details method');
//     },
//     demo: () => {
//         console.log(this); //window -> it will borrow from the parent env 
//     }
// }

// console.log(obj);  //! {pname: 'A', age: 30, details: ƒ, demo: ƒ}

// // obj.details() /// Name is Varun , age is 40 // ! if ... console.log(`Name is ${pname} , age is ${age}`);
// obj.details() /// Name is A , age is 30 // ! if ... console.log(`Name is ${this.pname} , age is ${this.age}`);
// obj.demo()  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}






// let b1 = {
//     name:'B',
//     age:40,
//     details:function(){
//         console.log(this); // b1
//         let demo = ()=>{
//             console.log(this); // b1
//         }
//         demo()
//     }
// }
// console.log(b1);   // {name: 'B', age: 40, details: ƒ}
// b1.details()  //  {name: 'B', age: 40, details: ƒ}
// b1.demo(); // ! objects.js:138  Uncaught TypeError: b1.demo is not a function






let b1 = {
    name:'B',
    age:30,
    details1: function(){
        console.log(this);  // b1
    },
    details2: function(){
        let demo = ()=>{
            console.log(this); //b1
        }
        demo()
    }
}
console.log(b1);   // {name: 'B', age: 30, details1: ƒ, details2: ƒ}
b1.details1();  // {name: 'B', age: 30, details1: ƒ, details2: ƒ}
b1.details2(); // {name: 'B', age: 30, details1: ƒ, details2: ƒ}





// ! Programming
// let cart = [
//     {
//         pname : 'Iphone',
//         price:70000,
//         qty:3
//     },
//     {
//         pname : 'PS5',
//         price:54000,
//         qty:1
//     },
//     {
//         pname : 'LED 155',
//         price:30000,
//         qty:1
//     },
//     {
//         pname : 'speakers',
//         price:10000,
//         qty:1
//     }
// ]
// ! calculate the total of the cart 
// let total = cart.reduce((acc , el , i , arr)=>{
//     console.log(acc , el);
//    return acc+ el.price*el.qty;
// } , 0)
// console.log(total);







