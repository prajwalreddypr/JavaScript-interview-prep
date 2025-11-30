//Return all numbers > 10 from this array:
//[5, 12, 7, 20, 3]

// let array = [5, 12, 7, 20, 3];
// let new_array = []
// for (let item of array){
//     if (item > 10){
//         new_array.push(item)
//     }
// }
// console.log(new_array)


//Given this object, print "age: 21" using a loop:
//const user = { name: "Prajwal", age: 21 };

// let obj = {
//     name: "Prajwal",
//     age: 21
// };

// for (let key in obj){
//     if (key == "age"){
//         console.log(key + " : " + obj[key]);
//     }
// }


//Reverse the string "javascript" manually (no reverse(), no tricks).

let string = "javascript";
let reversed = "";

for(let char of string){
    reversed = char + reversed;

}

console.log(reversed);


//Count how many times 2 appears here:
//[2, 5, 2, 7, 2, 9]

let arr = [2,5,2,7,2,9];
let count = 0;

for(let char in arr){
    if (arr[char] == 2){
        count += 1;
    }
}

console.log(count);