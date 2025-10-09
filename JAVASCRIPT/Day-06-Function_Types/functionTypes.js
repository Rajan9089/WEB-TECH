// function calc(a,b,c){
//     a(b,c)
// }

// calc(sum,10,5);
// calc(sub,10,5);
// calc(mult,10,5);

// calc((p1,p2)=>{
//     console.log(p1%p2);  
// } , 12 , 5);

// function sum(p1,p2) {
//     console.log(p1+p2); 
// }
// function sub(p1,p2) {
//     console.log(p1-p2); 
// }
// function mult(p1,p2) {
//     console.log(p1*p2); 
// }


// (
//     function(a,b){
//         console.log(a+b);
//     }
// )(10,12)



// function outer(){
//     console.log('Ounter function');
//     function inner(){
//         console.log('Inner function');
//     }
//     inner();
//     console.log('End of outer function');
// }
// outer();
// console.log('After the outer , End of everything');




// function outer(){
//     console.log('Ounter function');
//     function inner(){
//         console.log('Inner function');
//     }
//    return inner();
// }
// let a = outer();


// function outer(){
//     console.log('Ounter function');
//     return function inner(){
//         console.log('Inner function');
//     }
// }
// let a = outer();


// function gp() {
//     let gpGold = 50;
//     let gnLand = 40;

//     function p() {
//         let pGold = 330;
//         let pLand = 60;

//         function child() {
//             let cGold = 10;
//             let cLand = 20;
//             console.log(gpGold + pGold + cGold);

//         }
//         child();
//     }
//     p();
// }
// gp();




// function gp() {
//     let gpGold = 50;
//     let gnLand = 40;

//     return function p() { 
//         let pGold = 330;
//         let pLand = 60;

//         return function child() {
//             let cGold = 10;
//             let cLand = 20;
//             console.log(gpGold + pGold + cGold);

//         }
//     }
// }
// gp();




