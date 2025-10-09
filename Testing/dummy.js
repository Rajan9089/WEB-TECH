['7', 'pname', 'jNo', 'team', 'isMarried']
// !2. Object.values(obj)
// it will return all the values of obj in an array 
// let p1 = {
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.values(p1)); // (5) ['fav No.', 'MSD', 7, 'CSK', true]
// ! Object.entries(obj)
// it will return all the key and value pairs as nested arrays in an array 
// let p1 
//     team:'C
//     7:'fav No.'
// }
// console.log(Object.entries(p1)); // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]

// ! Object.seal
// It will seal the object, after that we cannot perform the operations like adding a new property or deleting a property,
// we can only update the existing properties 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// Object.seal(p1)
// delete p1.pname; // not possible
// p1.place = 'Kerala' // not possible
// p1.team = "MI" // update is possible
// console.log(p1);

// ! Object.freeze(obj)
// It will freeze the object, after that we cannot perform any operations like adding a new property or deleting a prop
// }
// Object.freeze(p1)
// delete p1.pname; // not possible

// ! Object.isFrozen(objName)
// return true if the object is frozen
// console.log(Object.isFrozen(p1));

// ! Object.isSealed(objName)
// return true if the object is sealed
// console.log(Object.isSealed(p1))


// ! Methods 
// A method is function which is declared inside the object 
// let pname = 'Varun'
// let age = 40
// ! this keyword
// this keyword is a referencing variable 
// it will reference to the object which is currently executing the function
// ! globally -> window 
// ! global function -> window
// ! method -> obj which is executing it 
// ! method as arrow function -> window

// console.log(this); // window
// function fun(){
//     console.log(this); //window
// }
// fun()
// window.fun()

// let obj = {
//     pname:'A',
//     age:30,
    // ! 1st way -> key and value pair
    // details:function(){
    //     console.log(`Name is ${this.pname} , age is ${this.age}`);
    //     console.log('Details method');
    // },
    // ! 2nd way -> without using key and value pair 
    // ! arrow function doesn't have their own this keyword so they will borrow from their outer env. 
//     demo:()=>{
//          console.log(this); //window -> it will borrow from the parent env 
//     }
// }
// ! how to call a method
// objName.method()
// obj.details()
// obj.demo()
// let b1 = {
//     name:'B',
//     age:40,
//     details:function(){
//         console.log(this); // b1
//         let demo = ()=>{
//             console.log(this); //b1
//         }
//         demo()
//     }
// }
// console.log(b1);
// b1.details()

// ! call apply bind 


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
//    return acc+el.price*el.qty;
// } , 0)
// console.log(total);


// console.log(this === window);


//! https://codeshare.io/5Qknv7

// ! this keyword
// console.log(this); // window
// function fun(){
//     console.log('Function fun is called');
//     console.log(this);  // window
// }
// fun()
// window.fun()

// let obj  = {
//     name:'A',
//     age:40,
//     details:function(){
//         console.log('Details is executed');
//         console.log(this); // it will point to the object which is currently executing it
//     },
//     demo:()=>{
//         console.log(this); //window -> they will borrow from parent env
//     }
// }
// obj.details()
// console.log(obj);
// ! call ,apply , bind
// these are the method used to change the reference of this keyword
// function fun(a){
//     console.log(this);
//     console.log(a);
    
// }
// let p1 = {
//     name:'Demo',
//     age:40
// }
// let p2 = {
//     name:'Dinga',
//     age:50
// }
// fun.call(p1 , 20)
// fun.call(p2 , 70)
// fun.apply(p2 , [90])
// let res = fun.bind(p1)
// res(10)
// res(20)
// res(30)

// ! Ways to create an object 
// ! Basic Ways 
// 1. literals ({})
// let obj = {}
//! 2. new Object ()
// let obj = new Object()
// obj.name  = 'b'
// console.log(obj);

// ! Advance ways 
//! 3. constructor function ({})
// function Student(name , grade , rollno){
//     this.name = name,
//     this.rollno = rollno,
//     this.grade = grade
// }
// Student.prototype.details = function(){
//         console.log('This is details');
//     }
// let s1 = new Student('A' , 10 , 5);
// let s2 = new Student('B' , 7 , 2);
// console.log(s1);
// console.log(s2);

// ! new keyword 
// 1. it will allocate some memory in heap area(emty object)
// 2. it will reference this keyword of constructor function to the newly created object
// 3. all the properties will be assigned to the object 
// 4. it will return the reference of the object 
// console.log(s1);
// console.log(s2);


// ! 4. class
// class Student{
//     constructor(name , grade){
//       this.name = name,
//       this.grade = grade
//     }
//     details(){
//         console.log(this.name , this.grade);   
//     }
// }
// let s1 = new Student('B' , 4)
// let s2 = new Student('C' , 5)
// s1.details()
// s2.details()
// console.log(s1);
// console.log(s2);

// !5. Object.create(protoType Obj)
// it will accept the prototype object as argument
// let res = Object.create({name:'a' , age:90})
// console.log(res);
// console.log(res.name);
// console.log(res.age);

// !6. Object.assign()
// it is used to copy the properties of one object into another
// let obj1 = {
//     name:'A'
// }
// let obj2 = {
//     age:70
// }
// let obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);


// ! https://codeshare.io/5ew8Y7
// ! Programming on objects 
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, rating: 4.5, stock: 30 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, rating: 4.2, stock: 50 },
  { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 150, rating: 4.7, stock: 100 },
  { id: 4, name: "Headphones", category: "Electronics", price: 100, rating: 3.9, stock: 200 },
  { id: 5, name: "Blender", category: "Home Appliances", price: 75, rating: 4.0, stock: 150 },
  { id: 6, name: "Washing Machine", category: "Home Appliances", price: 500, rating: 4.8, stock: 20 },
  { id: 7, name: "TV", category: "Electronics", price: 1500, rating: 4.3, stock: 10 },
  { id: 8, name: "Microwave", category: "Home Appliances", price: 200, rating: 4.1, stock: 60 },
  { id: 9, name: "Smartwatch", category: "Electronics", price: 300, rating: 4.0, stock: 75 },
  { id: 10, name: "Tablet", category: "Electronics", price: 450, rating: 4.6, stock: 40 },
  { id: 11, name: "Refrigerator", category: "Home Appliances", price: 900, rating: 4.5, stock: 25 },
  { id: 12, name: "Air Conditioner", category: "Home Appliances", price: 1200, rating: 4.8, stock: 15 },
  { id: 13, name: "Electric Kettle", category: "Home Appliances", price: 40, rating: 4.3, stock: 150 },
  { id: 14, name: "Printer", category: "Electronics", price: 150, rating: 3.7, stock: 120 },
  { id: 15, name: "Gaming Console", category: "Electronics", price: 500, rating: 4.4, stock: 30 },
  { id: 16, name: "Electric Toothbrush", category: "Personal Care", price: 60, rating: 4.6, stock: 200 },
  { id: 17, name: "Hair Dryer", category: "Personal Care", price: 40, rating: 4.2, stock: 250 },
  { id: 18, name: "Sofa", category: "Furniture", price: 800, rating: 4.7, stock: 20 },
  { id: 19, name: "Dining Table", category: "Furniture", price: 450, rating: 4.3, stock: 15 },
  { id: 20, name: "Chair", category: "Furniture", price: 100, rating: 4.0, stock: 200 }
];

// ! display all the products with rating more than 4.2
// let filteredRatings = products.filter((el)=>{
// //    console.log(el.rating);
//    return el.rating<=4.2
// })
// console.log(filteredRatings);

// ! sort based stock 
// let sortedStock = products.sort((p1 , p2)=>{
//    return p1.stock-p2.stock
// })
// console.log(sortedStock);

// let sortedId = products.sort((p1 , p2)=>{
//    return p2.id-p1.id
// })
// console.log(sortedId);

// ! sort based on price
// let sortedPrice = products.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(sortedPrice);


// ! filter all furniture products
// let furniture  = products.filter((el)=>{
//     return el.category == 'Furniture'
// })
// console.log(furniture);
// let Electronics  = products.filter((el)=>{
//     return el.category == 'Electronics'
// })
// console.log(Electronics);


// ! total stock 
console.log(products);

// let totalStock = products.reduce((acc , el)=>{
//   return acc+el.stock
// } , 0)
// console.log(totalStock);

// let totalPrice = products.reduce((acc , el)=>{
//   return acc+el.price*el.stock
// } , 0)
// console.log(totalPrice);

const detailedProducts = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    category: "Electronics",
    price: 1200,
    rating: 4.5,
    stock: 30,
    discount: 10,
    isFeatured: true,
    tags: ["work", "portable", "windows"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-15"
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    category: "Electronics",
    price: 999,
    rating: 4.3,
    stock: 50,
    discount: 5,
    isFeatured: false,
    tags: ["android", "camera", "5G"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-03-10"
  },
  {
    id: 3,
    name: "Blender",
    brand: "Philips",
    category: "Home Appliances",
    price: 90,
    rating: 4.0,
    stock: 200,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "mixer", "easy-clean"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-11-22"
  },
  {
    id: 4,
    name: "LED TV",
    brand: "Sony",
    category: "Electronics",
    price: 1500,
    rating: 4.8,
    stock: 12,
    discount: 20,
    isFeatured: true,
    tags: ["smart", "4K", "entertainment"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-01"
  },
  {
    id: 5,
    name: "Air Fryer",
    brand: "Ninja",
    category: "Home Appliances",
    price: 180,
    rating: 4.6,
    stock: 80,
    discount: 10,
    isFeatured: false,
    tags: ["healthy", "kitchen"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-04-05"
  },
  {
    id: 6,
    name: "Gaming Console",
    brand: "Sony",
    category: "Electronics",
    price: 499,
    rating: 4.7,
    stock: 25,
    discount: 0,
    isFeatured: true,
    tags: ["gaming", "4K", "console"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-05-15"
  },
  {
    id: 7,
    name: "Smartwatch",
    brand: "Apple",
    category: "Electronics",
    price: 399,
    rating: 4.4,
    stock: 60,
    discount: 8,
    isFeatured: true,
    tags: ["fitness", "watch", "iOS"],
    warranty: { years: 1, type: "Onsite" },
    addedOn: "2023-06-01"
  },
  {
    id: 8,
    name: "Washing Machine",
    brand: "LG",
    category: "Home Appliances",
    price: 750,
    rating: 4.5,
    stock: 18,
    discount: 12,
    isFeatured: false,
    tags: ["laundry", "automatic"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-10"
  },
  {
    id: 9,
    name: "Microwave",
    brand: "Panasonic",
    category: "Home Appliances",
    price: 200,
    rating: 4.2,
    stock: 100,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "heating"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-12-15"
  },
  {
    id: 10,
    name: "Camera",
    brand: "Canon",
    category: "Electronics",
    price: 850,
    rating: 4.6,
    stock: 22,
    discount: 10,
    isFeatured: true,
    tags: ["dslr", "photography"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-25"
  },
  {
    id: 11,
    name: "Tablet",
    brand: "Lenovo",
    category: "Electronics",
    price: 300,
    rating: 4.1,
    stock: 70,
    discount: 5,
    isFeatured: false,
    tags: ["portable", "android"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-07-20"
  },
  {
    id: 12,
    name: "Vacuum Cleaner",
    brand: "Dyson",
    category: "Home Appliances",
    price: 600,
    rating: 4.7,
    stock: 15,
    discount: 10,
    isFeatured: true,
    tags: ["cleaning", "cordless"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-05-30"
  },
  {
    id: 13,
    name: "Router",
    brand: "TP-Link",
    category: "Electronics",
    price: 120,
    rating: 4.3,
    stock: 90,
    discount: 20,
    isFeatured: false,
    tags: ["wifi", "internet"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-01-05"
  },
  {
    id: 14,
    name: "Air Conditioner",
    brand: "Samsung",
    category: "Home Appliances",
    price: 1000,
    rating: 4.6,
    stock: 10,
    discount: 18,
    isFeatured: true,
    tags: ["cooling", "summer"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-04-10"
  },
  {
    id: 15,
    name: "Monitor",
    brand: "LG",
    category: "Electronics",
    price: 280,
    rating: 4.2,
    stock: 40,
    discount: 10,
    isFeatured: false,
    tags: ["display", "hd", "work"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-08-01"
  },
  {
    id: 16,
    name: "Dishwasher",
    brand: "Bosch",
    category: "Home Appliances",
    price: 1100,
    rating: 4.7,
    stock: 8,
    discount: 25,
    isFeatured: true,
    tags: ["cleaning", "kitchen"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-03-15"
  },
  {
    id: 17,
    name: "Smart Speaker",
    brand: "Amazon",
    category: "Electronics",
    price: 130,
    rating: 4.0,
    stock: 120,
    discount: 5,
    isFeatured: false,
    tags: ["music", "voice", "alexa"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2022-10-10"
  },
  {
    id: 18,
    name: "Electric Kettle",
    brand: "Prestige",
    category: "Home Appliances",
    price: 60,
    rating: 4.3,
    stock: 150,
    discount: 30,
    isFeatured: false,
    tags: ["tea", "boil", "kitchen"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-09-01"
  },
  {
    id: 19,
    name: "Projector",
    brand: "Epson",
    category: "Electronics",
    price: 650,
    rating: 4.4,
    stock: 30,
    discount: 12,
    isFeatured: true,
    tags: ["display", "entertainment"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-06-25"
  },
  {
    id: 20,
    name: "Hair Dryer",
    brand: "Philips",
    category: "Personal Care",
    price: 45,
    rating: 4.1,
    stock: 180,
    discount: 15,
    isFeatured: false,
    tags: ["personal", "styling"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-07-01"
  }
];


// 💡 Advanced Questions by Concept
// 🔎 filter()

// Get all products that are featured.

// Find all electronics with a rating above 4.5.

// List all products that were added after March 2023.

// Filter products that have both a discount ≥ 15% and stock > 50.

// 🧭 map()

// Create a list of product names with their final price after discount.

// Map products to include a priceRange field: "Low" (<$100), "Medium" ($100–500), "High" (>$500).

// Extract a list of objects with only: name, brand, category.

// 🔍 find()

// Find the first product with a warranty of more than 1 year.

// Find a product with the tag "kitchen" and rating > 4.2.

// ➗ reduce()

// Calculate the total inventory value (sum of price × stock).

// Find the average rating of all Home Appliances.

// Count the number of products in each category.

// 📊 sort()

// Sort all products by price descending.

// Sort products by rating, and if equal, then by price ascending.

// Sort products alphabetically by name. / some()

// Check if all products have at least a 1-year warranty.

// Check if any product has more than 25% discount.

// Check if all products in Personal Care are under $100.

// 🔄 Combined / Advanced

// Find the top 3 most expensive products in Home Appliances.

// Get a list of all products with stock under 20 and sorted by rating.

// Find the most expensive product for each category.

// Group all products by their warranty type, showing counts in each.