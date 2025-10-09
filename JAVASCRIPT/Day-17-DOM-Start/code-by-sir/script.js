// console.log(window.document);
// console.log(document);
// console.dir(document);


// ! document 
// ! CRUD over html elements 
// Read 
// DOM selector methods 
// ! 1. document.getELementById('id')
// it will return a single html element node(object format)
// let list2 = document.getElementById('list2')
// let heading  = document.getElementById('heading')
// console.log(list2);
// console.log(heading);

// ! 2. document.getElementsByTagName('tag')
// it returns the collection of html element node (html collection)
// html collection is similar to array but it is not an array because we cannot perform array operations over that 
// for(let i = 0; i<allLi.length; i++){
//   console.log(allLi[i]);
// }


// !3. document.getElementsByClassName('class')
// it returns the collection of html element node (html collection)
// html collection is similar to array but it is not an array because we cannot perform array operations over that 
// let evens = document.getElementsByClassName('even');
// let odd = document.getElementsByClassName('odd');
// console.log(evens);
// console.log(odd);

// !4. getElementsByName('name')
// it will target the element based on the name attribute value
// it will return a nodelist (forEach)
// let user = document.getElementsByName('user')
// console.log(user);
// user.forEach((el , i)=>{
//     console.log(el);
// })

// ! 5. document.querySelector('')
// querySelector is an advance method , it will accept all the css selectors
// it will return the first matching element based on the selector 
let h1 = document.querySelector('.odd');
console.log(h1);

// ! 6. document.querySelector('')
// querySelectorAll is an advance method , it will accept all the css selectors
// it will return all the matching element based on the selector 
// it will return a nodeList 

// let allLi = document.querySelectorAll('li')
// console.log(allLi);

// ! update 
//! innerText 
// innerText will return the text content of the element as it is displayed on the UI
// it is also used to update the text of the element
//! innerHTML
// innerText will return the html written in b/w opening and closing tag of the element 
// it can accept the html elements also
//! textContent
// textContent will return the text content of the element as it is written in the html file
// it is also used to update the text of the element
// let first = document.querySelector('#first')
// console.log(first);
// first.innerText = 'Hello , Akshay'
// first.innerHTML = 'Hello , <i>Akshay</i>'
// first.textContent = 'Hello , <i>Akshay</i>'

// let para = document.querySelector('.para')
// console.log(para.innerText);
// console.log('-----------------------------------');
// console.log(para.textContent);
// console.log('-----------------------------------');
// console.log(para.innerHTML);

// ! task 1
// let name = document.querySelector('.name');
// let inp = prompt('Enter your name');
// name.innerText = inp

let body = document.body;
body.innerHTML = '<h1>This is a heading created in js </h1>'
body.innerHTML = '<h2>This is second heading created in js </h2>'
body.innerHTML = `<ol>
<li>Potato</li>
<li>Tomato</li>
<li>Cabbage</li>
</ol>`
body.innerHTML += `<ul>
<li>Coffee</li>
<li>Tea</li>
<li>Juice</li>
</ul>`