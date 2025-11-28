//Reference types
// 1. Objects
// 2. Arrays
// 3. Fucntions


//objects in JS


// let course = {

//     title: "Advanced JS",
//     level: "hard",
//     room_no: 45

// };

// console.log(course)
// console.log(course.title)
// console.log(course["room_no"])
// console.log(course.level)


//value types vs reference types

let x = "Prajwal";
let y = x;

x= "Reddy"
console.log(x)
console.log(y) //only the value got copied.

let p = {

    name: "Gaandu"
};
let q = p;
p.name = "Gaandu Sule magane"

console.log(p)
console.log(q) //copied the reference


