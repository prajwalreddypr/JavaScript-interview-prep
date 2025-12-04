//REVERSE A STRING
//str = "paris"
// let revStr = function(str){
//     let rev = "";

//     for(let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;

// }

// console.log(revStr("ParisIsGreat"));


//REVERSE AN ARRAY
//arr = [1,2,3,4,5];

// let revArray = function(arr){
//     let rev = [];

//     for(let i=arr.length-1; i >=0 ; i--){
//         rev.push(arr[i]);
//     }

//     return rev;
// }

// console.log(revArray([1,2,3,4,5]));



//CHECKING PALINDROME
//str = "parisIsGreat"
         
// let palindrome = function(str){
//     str = str.toLowerCase();

//     let i = 0;
//     let j = str.length-1;

//     while(i < j){
//         if(str[i] != str[j]){
//             return false;
//         }else{
//             i += 1;
//             j -= 1;
//         }
//     }
//     return true;
// }

// console.log(palindrome("Malayalam"));



//REMMOVE duplicates in an array
//arr = [1,2,2,3,3,4,5,6];
//output = [2,3];

// let duplicates = function(arr){
//     let count = {};
//     let dup = []

//     for(let i=0; i < arr.length; i++){
//         if(count[arr[i]] === undefined){
//             count[arr[i]] = 1;
//         }else{
//             count[arr[i]] += 1;
//         }
//     }
    
//     for(let key in count){
//         if(count[key] > 1){
//             dup.push(Number(key));
//         }
//     }
//     return dup;
// }

// console.log(duplicates([1,2,2,3,3,4,5,6]));


//ANAGRAM
//length of both the strings must be same and character count must be same
//str1 = "listen";
//str2 = "tensil";

// let isAnagram = function(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     let count = {};
//     for(let i = 0; i < str1.length; i++){
//         if(count[str1[i]] === undefined){
//             count[str1[i]] = 1;

//         }else{
//             count[str1[i]] += 1;
//         }
//     }
    
//     for(let i=0; i < str2.length; i++){
//         if(!count[str2[i]]){
//             return false;
//         }else{
//             count[str2[i]] -= 1;
//         }
//     }
//     return true;


// }

// console.log(isAnagram("race","care"));




//SUM OF ARRAY ELEMENTs

// let sumArray = function(arr){

//     let sum = 0;
//     for(let i=0; i< arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1,2,3,4,5]));



//MAX ELEMENT IN A ARRAY
let maxElem = function(arr){
    
}