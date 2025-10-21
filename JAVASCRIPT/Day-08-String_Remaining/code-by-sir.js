// ! Imp Concepts
// Hoisting
// TDZ
// let , var , const
// truthy falsy values
// all the functions
// closure

// ! String
// String is immutable
// let str = 'abc'
// let str1 = "abc";
// let str2 = `abc`;
// let str3 = new String('abc')
// let str4 = new String('abc')
// console.log(str == str1);
// console.log(str == str2);
// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(str == str3);
// console.log(str === str3);

// console.log(str3 == str4);

// ! immutability
// let str = 'java'; 
// str[0] = 'k' // → ❌ This does nothing.
// console.log(str[0]); // j
// console.log(str); // java
// str = 'script'  // ✅ This creates a new string and reassigns it to the variable str.
// console.log(str); // script


// // ! concatination
// let fName = 'Rohit'
// let lName = 'Sharma'
// console.log(fName+' '+lName);




// ! properties and methods 
// property
// ! length
// it will return the length(no. of characters) of the string 
// let str = 'javascript';
// console.log(str.length); // 10

// ! methods 
// ! 1. toLowerCase()
// it will convert all the characters of the string to lowercase
// and it will return a new string
// let str = 'VIRAT'
// let lstring = str.toLowerCase();
// console.log(lstring);
// console.log(str);
// ! 2. toUppperCase()
// it will convert all the characters of the string to lowercase
// and it will return a new string
//  let str = 'java';
// let res=  str.toUpperCase()
// console.log(res);
// console.log(str);

// !3. trimStart();
// it will remove the unnecessary spaces from the beginning of the string
// let str = '                               java'
// console.log(str.length);
// let ts = str.trimStart()
// console.log(ts.length);
// !4. trimEnd();
// it will remove the unnecessary spaces from the beginning of the string
// let str = 'java                          '
// console.log(str.length);
// let ts = str.trimEnd()
// console.log(ts.length);
// !5. trim();
// it will remove the unnecessary spaces from the beginning and the end of the string
// let str = '                    java                          '
// console.log(str.length);
// let t= str.trim()
// console.log(t.length);

// !6. indexOf('char')
// it will return the index of first occurrence of the character
// if the character is not present in the string it will return -1
// let str = 'javascripts'
// console.log(str.indexOf('s'));//4
// console.log(str.indexOf('n'));//-1 // since 'n' is not present

// !7. lastIndexOf('char')
// it will return the index of last occurrence of the character
// let str = 'java'
// console.log(str.lastIndexOf('a')); // 3
// console.log(str.indexOf('a'));

// ! 8. charAt(index)
// it will return the character present at a particular index
// but if character is not present at that particular index, it will return empty string.
// let str = 'javascript'
// console.log(str.charAt(0)); // j
// console.log(str.charAt(9)); // t
// console.log(str.charAt(20)); // ''
// console.log(str.charAt(-1)); // ''



// let str = 'javascript'
// !9. substring(s.i , e.i)
// it will return a specific part of the string based oon the si and ei , substring does not accept negative index
// e.i is always excluded
// console.log(str.substring(0 , 4));
// console.log(str.substring(4 , 10)); //script
// console.log(str.substring(4)); //script
// !10. substr(s.i , length)
// it is deprecated
// console.log(str.substr(0 , 4)); // java
// console.log(str.substr(4 , 6)); // script


// !11. slice(s.i , e.i)
// slice is similar to substring
// it will accept the negative index values
// console.log(str.slice(-6 , -2));

// ! Question 
// Take input from the user as username ('rohit')
// Rohit
// rOHIT
// ROHIT
// let username = prompt('Enter Your Name'  );
// console.log(username);
// let firstLetter = username.charAt(0);
// let remLettter = username.slice(1)
// console.log(firstLetter.toUpperCase()+remLettter.toLowerCase());
// console.log(firstLetter.toLowerCase()+remLettter.toUpperCase());
// console.log(username.toUpperCase());


// function toCapitalize(str){
//     return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
// }
// let name = 'AKSHAY';
// let res = toCapitalize(name)
// console.log(res);

// !12. replace('prevSubst' , 'newSubst')
// it will replace the first occurence of a substring with a new substing
// let str = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replace('HA' , 'HE')
// console.log(temp);
// !12. replaceAll('prevSubst' , 'newSubst')
// it will replace the all the occurence of a substring with a new substing
// let str = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replaceAll('HA' , 'HE')
// let temp1 = str.replaceAll('HE' , 'HA')
// console.log(temp);
// console.log(temp1);

// !13. includes()
// includes will return a boolean value , it will return true if a character is present inside the string,otherwise false 
// console.log('akshay'.includes('a')); // true
// console.log('akshay'.includes('z')); // false

// ! Ques 
// ! Check if a name starts with vowel or not
// let username = prompt('Enter your name');
// let fc = username.charAt(0)
// if('aeiou'.includes(fc.toLowerCase())){
//     console.log(`The name ${username} starts with a vowel`);
// }else{
//     console.log(`The name ${username} does not  starts with a vowel`);
// }

// ! Check if a string starts with a vowel or not 
// let str = prompt('Enter the name ')
// if('aeiou'.includes(str.charAt(0).toLowerCase())){
//     console.log(`The ${str} starts with a vowel`);
// }else{
//     console.log(`The ${str} does not starts with a vowel`);
// }

// ! at()
// at is similar to charAt
// it will return the character present at a particular index.
// at will accept the negative index also
// let str = 'javascript'
// console.log(str.charAt(-1));
// console.log(str.at(-1));

// ! split()
// ! split is used to convert string into array based on the separator
// ! separator will be excluded 
// let str = 'This is Javascript';
// ! if we do not pass the separator , it will return the complete string as the single element of the array 
// console.log(str.split()); //['This is Javascript']
// ! ' ' as a separator will return all the words as the elements of the array
// console.log(str.split(' ')); // ['This', 'is', 'Javascript']
// ! '' as a separator will return all the characters as the elements of the array
// console.log(str.split(''));  // (18) ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// console.log('javascript'.split('')); // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// let str2 = 'javascript';
// console.log(str2.split('a')); // ['j' , 'v' , 'script']
// ! concat()
// ! concat is used to join multiple strings together
// let firstName = 'Rohit'
// let lastName = 'Sharma'
// let fullName = firstName.concat(' ', lastName);
// console.log(fullName);
// ! charCodeAt()
// it will return the ascii value of a character present at a particular index
// let str = 'JAVA'
// console.log(str.charAt(1)); // A
// console.log(str.charCodeAt(1));//65
// ! fromCharCode()
// it will convert ascii values to the characters
// console.log(String.fromCharCode(97)); //a

// ! endsWith()
// it will return a boolean value  , based on if a string ends with a particular substring 
// let str = 'JAVA'
// console.log(str.endsWith('VA')); // true
// console.log(str.endsWith('Z')); // false

// ! startsWith()
// it will return a boolean value  , based on if a string starts with a particular substring 
// console.log(str.startsWith('J')); // true
// console.log(str.startsWith('B')); // false



// ! Ques1 -> w.a.f to return the number of vowels present inside a string
// ! Ques2 -> w.a.f to return the number of words inside a string
// ! Ques3 -> w.a.f to return the number of ' ' within a string
// ! Ques4 -> w.a.f to return the longest word from a string 
// ! Ques5 -> w.a.f to reverse the letters of the string 
//    'this is java' -> 'avaj si siht'
// ! Ques6 -> w.a.f to reverse the words of the string 
//    'this is java' -> 'java is this'
// ! Ques7 -> w.a.f to identify if a name starts with a vowel


// ! Ques1 -> w.a.f to return the number of vowels present inside a string
// function checkVowels(str){
// //   let vowels = 'aeiou';
//   let count = 0;
//   for(let i = 0; i<str.length; i++){
//     console.log(str[i]);
//     if('aeiou'.includes(str[i].toLowerCase())){
//         count++;
//     }
//   }
//   return count; 
// }
// console.log(checkVowels('aakash'));

// ! Ques2 -> w.a.f to return the number of words inside a string
// let str = 'we love js today';
// let words = str.split(' ')
// console.log(words.length);

// ! Ques3 -> w.a.f to return the number of ' ' within a string
// let str = ' we love js today hello';
// let words = str.split(' '); 
// console.log(words);
// let numOfSpaces = words.length-1;
// console.log(numOfSpaces);

// console.log(' we '.split(' '));  // (3) ['', 'we', '']

// ! Ques4 -> w.a.f to return the longest word from a string 
// function longestWord(str){
//     let max = 0;
//     let maxLengthWord = '';
//     let words = str.split(' ')
//     console.log(words);
//     for(let i=0; i<=words.length-1; i++){
//       if(words[i].length>max){
//         max = words[i].length;
//         maxLengthWord = words[i]
//       }
//     }
//     return maxLengthWord;
// }
// console.log(longestWord('we love javascript today hello'));

// ! Ques5 -> w.a.f to reverse the letters of the string 
//    'this is java' -> 'avaj si siht'
// let str = 'this is java'
// let reversed = ''
// for(let i = 0; i<str.length; i++){
//     // console.log(str[i]);
//      reversed = str[i]+reversed
// }
// console.log(reversed);
// // ! looping from the last character
// for(let i = str.length-1; i>=0; i--){
//      reversed = reversed + str[i]
// }
// console.log(reversed);

// ! Ques6 -> w.a.f to reverse the words of the string 
//    'this is java' -> 'java is this'

function reverseWords(str){
    let reversed = ''
    let words = str.split(' ');
    for(let i = 0; i<words.length; i++){
        // console.log(words[i]);
        // reversed = words[i] + reversed ;     // javaisthis
        reversed = words[i] + ' ' + reversed ;   // java is this 
    }
    return reversed
}
console.log(reverseWords('this is java')); // java is this 
