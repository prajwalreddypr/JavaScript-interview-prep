//MAXIMUM IN AN ARRAY

// const arr = [43,6,8,34,67,34,8,9,534];
// let max = arr[0];

// for(let i=1; i<=arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);



//REVERSE AN ARRAY MANUALLY

// const arr = [1,2,3,4,5,6];
// let reverse = [];

// for( let i = arr.length-1; i >=0; i--){
//     reverse.push(arr[i]);
// }

// console.log(reverse);


//REMOVE DUPLICATES FROM AN ARRAY
// const arr = [1,2,3,4,5,5,6,7,8,1];
// let uniq = [];

// for(let num of arr){
//     if (uniq.includes(num)) continue;
//     else{
//         uniq.push(num);
//     }

// }

// console.log(uniq)


//SUM ALL ELEMENTS
// const arr = [2,3,5,6,7,456,3,54,5,4];
// let sum = 0;

// for(let num of arr){
//     sum += num;
// }

// console.log(sum);




//MULTIPLY EACH ELEMENT BY 2
// const arr = [1,2,3,4,5];
// // let doubled = arr.map(num => num * 2); //using map

// // console.log(doubled)
// let doubled = [];

// for(let num of arr){
//     doubled.push(num *2);     //own solution-using for loop
// }

// console.log(doubled)





//FILTER ODD NNUMBERS

// const arr = [2,3,54,6,7,8,9];
// const oddNumbers = arr.filter(num => num % 2 != 0);

// console.log(oddNumbers);


// //CONCATENATE 2 ARRAYS
// const arr1 = [34,435,564,675,564];
// const arr2 = [5,34,56,324,678];
// const combArray = arr1.concat(arr2);

// console.log(combArray);


// //FIDNING INDEX OF GIVEN ELEMENT
// const arr = [3,34,56,87,234,67,35];
// const index = arr.indexOf(87);

// console.log(index);



//ROTATE AN ARRAY BY 1 POSITION

// const arr = [1,2,3,4,5];
// let last = arr.pop();

// arr.unshift(last);
// console.log(arr);


//MERGEING ARRAYS AND SORTING
// const arr1 = [1,2,5,8,3,5,7];
// const arr2 = [67,34,7,34,56];

// const merged = arr1.concat(arr2).sort((a,b) => b-a);
// //a-b is asceding and b-a is descending
// console.log("Sorted :", merged);