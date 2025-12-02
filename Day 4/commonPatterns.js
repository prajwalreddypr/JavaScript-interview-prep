//COUNTING CHARACTERS IN A STRING
// let countChar = function(str){
    
    
//     let count = {};
//     for(let char of str){
//         if(char == " ") continue;
//         if(count[char]){
//             count[char] += 1;
//         }else{
//             count[char] = 1;
//         }

//     }
//     return count;
// }

// console.log(countChar("Crealo in Paris"));


//COUNTING ITEMS IN AN ARRAY
// let countItems = function(arr){

//     let count = {};
//     for(let item of arr){
//         if(count[item]){
//             count[item] += 1;
//         } else{
//             count[item] = 1;
//         }
//     }
//     return count;
// }


// const arr = [1,1,1,1,2,2,2,3,3,4];
// console.log(countItems(arr));




//CHECK IF 2 STRINGS ARE ANAGRAMS
let isAnagram = function(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let count = {};
    for(let char of str1){
        if(count[char]){
            count[char] += 1;
        }
        else{
            count[char] = 1;
        }
    }

    for(let char of str2){
        if(!count[char]){
            return false;
        }else{
            count[char] -= 1;
        }
    }

    return true;


}

console.log(isAnagram("hello0", "ellho"));
console.log(isAnagram("listens", "silenth"));


//FIDNING DUPLICATES IN AN ARRAY
