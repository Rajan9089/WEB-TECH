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
// let s1 = new Student('A' , 10 , 5);
// let s2 = new Student('B' , 7 , 2);
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


// !  