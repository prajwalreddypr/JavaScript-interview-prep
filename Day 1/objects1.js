// let user = {
//     name: "Prajwal",
//     age: 21
// };

// console.log(user.name);
// console.log(user.age);

// for (let item in user){
//     console.log(item, user[item]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//Convert object {a:1,b:2} into array of entries.

// let data = {
//     a: 1,
//     b: 2
// };

// console.log(Object.entries(data));

// //Access dynamic key stored in variable.

// let users = {
//     name: "Prajwal",
//     age: 25,
//     city: "Paris",
//     since: 2024
// };

// console.log(Object.keys(users));
// console.log(users["age"]);
// console.log(users["city"]);

//Count character frequency of a string into object.

let str ="Hello Paris, Bonjour";
let frq = {};

for(let char of str){
    if (char == " ") continue;
    if (char == ",") continue;

    if (frq[char]){
        frq[char] += 1;
    } else{
        frq[char] = 1;
    }
}

console.log(frq);