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


