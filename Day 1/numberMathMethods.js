// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.6));
// console.log(Math.random());
// console.log(Math.abs(-45));
// console.log(Math.max(1,2,3,4));
// console.log(Math.min(1,2,3,4));


//practice
// let randInt = Math.random();
// console.log(randInt);

// let number = 3.14159;
// console.log(Math.round(number));

// let number = "23"
// console.log(Math.abs(number));

// let array = [2,9,1];
// console.log(Math.max(...array));


//getting a random element from an array
// let array1 = [3,4,7,8,9,1];
// let randomElement = array1[Math.floor(Math.random() * array1.length)];

// console.log(randomElement);

let array = [2,3,4,6,7,9];
let randomInt = array[Math.floor(array.length * Math.random())];

console.log(randomInt)