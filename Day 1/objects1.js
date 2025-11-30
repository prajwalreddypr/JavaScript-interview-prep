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

// let str = "Hello Paris, Bonjour";
// let freq = {};

// for (let char of str){
//     if (char == " ") continue;
//     if (char == ",") continue;

//     if (freq[char]){
//         freq[char] += 1;
//     } else{
//         freq[char] = 1;
//     }
// }

// console.log(freq);


//Merge two objects.

let obj1 = {
    name: "PRajwal",
    age: 25
};

let obj2 = {
    city: "Paris",
    country: "France"
};

let merged = {...obj1, ...obj2};
console.log(merged);

//loop thorugh an object and print kEY AND VALUE

// let country = {
//     name: "France",
//     popu: 33, //in billions, just for namesake
//     capital: "Paris"
// };

// for (let key in country){
//     console.log(`${key} -> ${country[key]}`)
// }

