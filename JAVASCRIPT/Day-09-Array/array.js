// ! Ways to create an array
// let arr = [];
// console.log(arr);

// let nums = [10,20,30]
// console.log(nums);
// console.log(nums[2]);

// let temp = [];
// temp[0] = 10;
// temp[5] = 50;
// console.log(temp);  // (6) [10, empty × 4, 50]


// let names = ['Akshay', 'Aman', 'Anish', 'Aarav', 'Anshu']
// console.log(names);  // (5) ['Akshay', 'Aman', 'Anish', 'Aarav', 'Anshu']
// console.log(names[3]); // Aarav
// names[0] = 'Krish'
// console.log(names); // (5) ['Krish', 'Aman', 'Anish', 'Aarav', 'Anshu']
// delete names[2];
// console.log(names); // (5) ['Krish', 'Aman', empty, 'Aarav', 'Anshu']

// ! using constructor --- new Array()
// let arr2 = new Array();
// console.log(arr2);

// let arr3 = new Array(5);
// console.log(arr3); // (5) [empty × 5]

// !  'this is java' ---> 'java is this'

// let str = 'this is java';
// console.log(str);
// let rev = str.split(' ').reverse().join(' ');
// let rev1 = str.split('').reverse().join('');
// console.log(rev); 
// console.log(rev1);



// let str = 'this is java';
// let arr = str.split(' ');
// console.log(arr);
// arr.reverse();
// console.log(arr);
// console.log(arr.join(' '));

// !  'this is java' ----> 'avaj si siht'

// let str = 'this is java';
// let arr = str.split('');
// console.log(arr);
// arr.reverse();
// console.log(arr);
// console.log(arr.join(''));



// let nums = [9,2,10,100,200,40];
// console.log(nums);  // (6) [9, 2, 10, 100, 200, 40]
// nums.sort();
// console.log(nums); // (6) [10, 100, 2, 200, 40, 9]

// nums.sort((a,b)=>{
//     return a-b; // ascending
// });
// console.log(nums);

// nums.sort((a,b)=>{
//     return b-a; // descending
// });
// console.log(nums);


// let input1 = prompt('Enter first string');
// let input2 = prompt('Enter second string');
let input1 = 'elbow';
let input2 = 'woble';
function Anagram(input1 , input2){
    
    if(input1.length != input2.length){
        return false;
    }
    let res1 = input1.split('').sort().join('');
    let res2 = input2.split('').sort().join('');
    return res1 == res2;
}
if(Anagram(input1 , input2) == true){
    console.log('Anagram');
}else{
    console.log('not anagram');
    
}















