//! split method
// let str = 'custom function to capitalize a string'; 
// let arr = str.split(' ');
// console.log(arr);

// console.log('Javascript'.split(''));
// console.log('Javascript'.split('a'));

// let str = "javascript";

// console.log(str.split());
// console.log(typeof str.split()); // object


// console.log(' we '.split());


//! write a function to return the number of vowels present inside a string
// let str = 'Javascript';
// str = str.toLowerCase();
// function vowelsCount(str){
//     let cnt = 0;
//     for(let i = 0; i < str.length; i++ ){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
//             cnt++;
//         }
//     }
//     return cnt;
// let vowels = 'aeiou';
// for(let i = 0; i < str.length; i++) {
//     let cnt = 0;
//     if(vowels.includes(str[i])){
//         cnt++
//     }
// }
// return cnt;

// }
// console.log(vowelsCount('str'));


//! write a function to return the number of words present inside a string

// let str = 'custom function to capitalize a string';

// function wordsCount(str){
//     // let cnt = 0;
//     // for(let i = 0; i < str.length; i++){
//     //     if(str[i] == ' '){
//     //         cnt++;
//     //     }
//     // }
//     // return (str.length == 0) ? 0:  cnt + 1;


//     let arr = str.split(' ');
//     return arr.length;
// }
// console.log(wordsCount(str));


//! write a function to return the number of ' ' present inside a string

// let str = 'custom function to capitalize a string';

// function wordsCount(str){
//     let cnt = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == ' '){
//             cnt++;
//         }
//     }
//     return cnt;


//     // let arr = str.split(' ');
//     // return arr.length - 1;
// }
// console.log(wordsCount(str));


//! write a function to return the longest word present inside a string

// let str = 'custom function to capitalize a string';

// function longestWordInAString(str){
//     let arr  = str.split(' ');
//     let maxi = 0 , maxWords = '';
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > maxi){
//             maxi = arr[i].length;
//             maxWords = arr[i];
//         }

//     }
//     return maxWords;
// }
// console.log(longestWordInAString(str));

// ! Ques5 -> w.a.f to reverse the letters of the string 
// let str = 'custom function to capitalize a string';

// 'this is java' -> 'avaj si siht'
// custom function to capitalize ---> ezilatipac ot noitcnuf motsuc
// function reverseLetters(str) {
//     let reversed = '';
//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed
//     }


//     // for(let i = str.length-1; i >= 0; i--){
//     //     reversed =  reversed + str[i];  
//     // }   
//     return reversed;
// }
// console.log('custom function to capitalize', '--->', reverseLetters('custom function to capitalize'));




// ! Ques6 -> w.a.f to reverse the words of the string 
//    'java is this beautiful' -> 'beautifulthisisjava'

// function reverseWords1(str){
//     let reversed = ''
//     let words = str.split(' ');
//     for(let i = 0; i<words.length; i++){
//         // console.log(words[i]);
//         reversed = words[i] + reversed;
//     }
//     return reversed
// }
// console.log(reverseWords1('java is this beautiful'));


//    'java is this beautiful' -> 'beautiful this is java'
// function reverseWords2(str){
//     let reversed = ''
//     let words = str.split(' ');
//     for(let i = 0; i<words.length; i++){
//         // console.log(words[i]);
//         reversed = words[i] + ' '+ reversed;
//     }
//     return reversed
// }
// console.log(reverseWords2('java is this beautiful'));

// ! Ques6 -> w.a.f to reverse the each words of the string 
// "Let's have a walk" ---> "s'teL evah a klaw"

function reverseEachWords(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

}
console.log(reverseEachWords("Let's have a walk")); 



