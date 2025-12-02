//REVERSE A STRING
//without using reverse()

// let revStr = function(str){
//     let arr = str.split("");
//     let left = 0;
//     let right = arr.length-1;

//     while(left < right){
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left += 1;
//         right -= 1;
//     }
//     return arr.join("");

// }

// console.log(revStr("HEllo"))





//CHECKING IF STRING IS PALINDROME
// let palindrome = function(str){
//     let left = 0;
//     let right = str.length-1;

//     while(left<right){
//         if(str[left] != str[right]){
//             return false;
//         }

//         left += 1;
//         right -= 1;
//     }

//     return true;
// }

// console.log(palindrome("hello"));
// console.log(palindrome("racecar"));





//GIVEN 2 SORTED ARRAYS, MERGE THEM INTO 1 SORTED ARRAY. 
// algo/method ->we have 2 pointers at the beginnign of each array. compare values arr[i] w/ arr[j]. push the smaller value to the empty sorted array. increment the smaller one and keep doing it, untill one of the arrays end. Append to the sorted array whatever is left. return result.

let sortedArray = function(arr1, arr2){
    let i = 0;
    let j = 0;
    let result = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i += 1;
        }else{
            result.push(arr2[j]);
            j += 1
        }
    }

    //adding the remaining ones
    while(i < arr1.length){
        result.push(arr1[i]);
        i += 1;
    }
    
    while(j < arr2.length){
        result.push(arr2[j]);
        j += 1;
    }

    return result;
}

console.log(sortedArray([1,3,5], [2,4,6]));



//MOVE THE ZEROS TO ONE END OF THE ARRAY, WITHOUT AFFECTING THE OTHER ELEMENTES

