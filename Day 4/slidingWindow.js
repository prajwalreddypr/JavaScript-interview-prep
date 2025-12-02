//MAXIMUM SUM OF SUB_ARRAY OF SIZE K
// arr = [1,2,3,4,5,6]
//k = 3

// let maxSumSubArray =  function(arr, k){
//     let maxSum = 0;
//     let windowSum = 0;

//     for(i=0; i < arr.length; i++){
//         windowSum += arr[i];

//         if(i >= k-1){
//             maxSum = Math.max(windowSum,maxSum);
//             windowSum -= arr[i-k+1];
//         }
//     }
//     return maxSum;
// }

// console.log(maxSumSubArray([1,2,3,4,5,6], 3));




//LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

