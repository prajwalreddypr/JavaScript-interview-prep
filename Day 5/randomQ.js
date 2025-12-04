//fucntion that returns the length of the longest consecutive increasing subsequence.

let longestSubLength = function(arr){
    
    let maxLen = 0;
    let currentLen = 1;

    for(let i=1; i<arr.length ; i++){
        if(arr[i] > arr[i-1]){
            currentLen += 1;
        }else{
            currentLen = 1;
        }
        maxLen = Math.max(maxLen, currentLen);
    }
    
    return maxLen;
}

console.log(longestSubLength([1,2,2,3,4,1,2,3,4,5]));
