//REVSERSING A STRING WIHOUT REVERSE()

//str = "HelloWorld"



// let reverse = function(str){
    
//     let revString = "";
//     for(let i=str.length-1; i >= 0; i--){
        
        
//         let char = str[i];
        
//         revString += char;

//     }
//     return revString;
// }

// console.log(reverse("Hello"));





//chekc if a string is palindrome

//str = "racecar"

// let palindrome = function(str){
//     let i = 0;
//     let j = str.length-1;

//     while( i < j){
//         if(str[i] !== str[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// console.log(palindrome("racecar"));




//FIDNING LARGEST NUMBER INA ARRAY

// arr = [1,2,3,4,5];

// let largest = function(arr){
//     let maxNum = arr[0];

//     for(let i=0; i < arr.length; i++){
//         if(arr[i] > maxNum){
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }

// console.log(largest([1,2,3,4,5]));



// //REMVING FIRST ELEMENT OF AN ARRAY
// let remFirstElem = function(arr){
//     arr.shift();
//     return arr;

// }

// console.log(remFirstElem([1,2,3,4,5]));



// //
// const obj = {
//     name: "Prajwa",
//     age: 25
// };
// obj.city = "Paris";
// delete obj.age;
// console.log(obj);



// //SUM OF AN ARRAY
// let sum = function(arr){
//     let sumOfArray = 0;

//     for(i=0; i< arr.length; i++){
//         sumOfArray += arr[i];
//     }
//     return sumOfArray;
// }

// console.log(sum([1,2,3,4,5]));


///IS PRIME OR NOT
// let isPrime = function(num){
//     if(num <= 1){
//         return false;
//     }

//     for(i=2; i < num; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(9));
// console.log(isPrime(7));




//FIBONACCI SERIES UPTO n TERMS
// let fibonacci = function(num){

//     let num1 = 0;
//     let num2 = 1;
//     let nextNum;

//     for(let i=1; i <= num; i++){
//         console.log(num1);
//         nextNum = num1 + num2;
//         num1 = num2;
//         num2 = nextNum;
//     }
// }

// fibonacci(8);



//FREQUENCY OF AN ELEMENT IN AN ARRAY
// let countOfElement = function(arr){
//     let count = {};


//     for(let i=0 ; i< arr.length; i++){
//         if(count[arr[i]] === undefined){
//             count[arr[i]] = 1

//         }else{
//             count[arr[i]] += 1;
//         }
//     }
//     return count;
// }

// console.log(countOfElement([1,1,1,2,3,4,4,5]));




//FIRST NON REPEATED CHARACTER IN A STRING
// str = "aabbbcddd"; retun c here

// let nonRep = function(str){
//     let count = {};

//     for(let i=0; i < str.length; i++){
//         if(count[str[i]] === undefined){
//             count[str[i]] = 1
//         }else{
//             count[str[i]] += 1;
//         }
//     }
    
//     for(let key in count){
//         if(count[key] === 1){
//             return key;
//         }
//     }
//     return null;
// }

// console.log(nonRep("aaabbbababac"));