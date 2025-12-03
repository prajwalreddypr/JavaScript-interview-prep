//REVERSING A STRING

// let reverse = function(str){
//     revStr = "";

//     for(let i = str.length - 1; i >= 0; i--){

//         revStr += str[i];

//     } 
//     return revStr;
// }

// console.log(reverse("hello"));
// console.log(reverse("virat"));

// //using built in reverse functioon
// let rev = function(str){
//     revStr = str.split("").reverse().join("");
//     return revStr;
// }

// console.log(rev("hello"))



//CHECKING IF PALINDROME
// let palindrome = function(str){
//     str = str.toLowerCase();
//     rev = "";

//     for(let i = str.length - 1; i >=0; i--){
//         rev += str[i];
//     }

//     if(str === rev){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(palindrome("Malayalam"));




//MAX subarray of SIZE K
// let maxSubArray = function(arr, k){
//     let windowSum = 0;
//     let maxSum = 0;

//     //first step is to calculate the sum of first k elements.
//     for(let i=0; i <k; i++){
//         windowSum += arr[i];
//     }

//     maxSum = windowSum;

//     //step 2 is to remove the value of the first element of the prev subarry and add the next element to the windowSum nad then compare the maxSum and windowSum. return maxSum;

//     for(i=k ; i < arr.length; i++){
//         windowSum = windowSum - arr[i-k] + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }

// console.log(maxSubArray([1,2,3,4,5,6], 4));



//TWO SUM..finally lets see what the buzz is about

// let twoSum = function (arr, target){
//     let map = {};

//     //iterate over each value from index 0, find needed = target - num;
//     //check if map has needed, if yes return needed with index. Or else add the num & its index to the map.
    
//     for(let i=0; i < arr.length; i++){
//         let num = arr[i];
//         let needed = target - num;

//         if(map.hasOwnProperty(needed)){
//             return [map[needed], i];
//         }
//         else{
//             map[num] = i;
//         }
//     }
//     return null;
// }

// console.log(twoSum([1,2,3,4,5], 6));




//Q5 BEST TIME TO BUY AND SELL STOCK IN A SINGLE TRANSACTION

// let maxProfit = function(prices){
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for(let price of prices){
//         minPrice = Math.min(minPrice, price);
        
//         let profit = price - minPrice;
        
//         maxProfit = Math.max(maxProfit,profit );

//     }
//     return maxProfit;
// }

// console.log(maxProfit([7,1,5,3,6,4]));




//MOVING ZEROS TO ONE END WITHOUT AFFEXTING THE ORDER
// let swap = function(arr){
//     let i = 0;

//     for(j=0; j<arr.length; j++){
//         if(arr[j] !== 0){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i += 1;
//         }

//     }
//     return arr;
// }

// console.log(swap([0,1,0,3,12]));



//FIND THE MISSING NUMBER INA ARRAY OF SIZE N.
// ex = [1,0,3] => n = 3 => 0,1,2,3; 2 is missing
//simple logic ->  expected sum - actual sum = missing number;

// let missingNum = function(arr){
//     let n = arr.length;
//     let actualSum = 0;
//     let expectedSum = n * (n+1)/2;

//     for(let item of arr){
//         actualSum += item;
//     }

//     let missingNum = expectedSum - actualSum;
//     return missingNum;
// }

// console.log(missingNum([1,0,3]));
// console.log(missingNum([0,1]));





//RETURN THE FIRST NON REPEATING CHARACTER
// let nonRepeating = function(str){
//     let count = {}

//     for(let i=0; i<str.length; i++){
//         let char = str[i];

//         if(count[char] == undefined){
//             count[char] = 1;

//         }else{
//             count[char] += 1
//         } 
//     }


//     for(let i=0; i < str.length; i++){
//         if(count[str[i]] === 1){
//             return str[i];
//         }
//     }
//     return null;
// }

// console.log(nonRepeating("xxyz"));



//MERGED 2 SORTED ARRAYS inTO A SORTED ARRAY

// let sorted = function(arr1, arr2){
//     let merged = [];
//     let i = 0;
//     let j = 0;


//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             merged.push(arr1[i]);
//             i += 1;
//         }else{
//             merged.push(arr2[j]);
//             j += 1;
//         }
//     }

//     while( i < arr1.length){
//         merged.push(arr1[i]);
//         i += 1;
//     }
//     while(j < arr2.length){
//         merged.push(arr2[j]);
//         j += 1;
//     }
//     return merged;
// }

// console.log(sorted([1,3,5,7], [2,4,6,8]));





//REVERSE WORDS INA STRING WHILE KEEPING THE WORDS SAME
//EX -> "Hello WOrld" -> "World Hello"

// let revWords = function(str){
//     let splitWords = str.split(" ");
//     let reverse = splitWords.reverse();
//     let revWords = reverse.join(" ");
    
//     return revWords;
// }

// console.log(revWords("Hello world this is Paris"));





