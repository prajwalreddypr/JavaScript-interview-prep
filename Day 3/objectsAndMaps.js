//CREATING AN OBJECT AND ACCESSING PROPERTIES

// const person = {
//     name: "Prajwal",
//     age: 25,
//     city: "PAris"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);


// //ADDING A PROPERTY TO AN OBJECT
// //CONTINUING FROM THE SAME CODE

// person.visa = "Valid";
// console.log(person.visa);

// //DELETING AN OBJECT
// delete person.age;
// console.log(person);


//LOOPING THROUGH OBJECT PROP
// const person = {
//     name: "Prajwal",
//     age: 23,
//     city: "Paris"
// };

// for(let key in person){
//     console.log(key, person[key]);
// }





// //MERGING 2 OBJECTS
// const obj1 = {name: "Prajwal"};
// const obj2 = {age: 22, city: "Paris"};
// const merged = {...obj1, ...obj2};
// console.log(merged);



// //CHECKING IF A KEY EXISTS
// const person = {
//     name: "Prajwal",
//     age: 22
// };
// console.log("age" in person);




//MAPPING OVER OBJECT VALUES
// const score = {
//     Alice: 90,
//     Bob: 80,
//     Charlie: 84
// };

// const doubled = Object.fromEntries(
//     Object.entries(score).map(([key, val])=> [key, val * 2]) 
// );

// console.log(doubled);





//FINDING KEY WITH HIGHEST VALUE
// const scores = {
//     Alice: 90,
//     Bob: 80,
//     Charlie: 84
// };
// let maxKey = Object.keys(scores)[0];

// for(let key in scores){
//     if(scores[key] > scores[maxKey]){
//         maxKey = key;
//     }
// }

// console.log(maxKey);




//MAP USAGE DUDE
// const map = new Map();
// map.set("name", "Prajwal");
// map.set("age", 25);

// console.log(map.get("name"));
// console.log(map.has("age"));
// console.log(map.size);

// map.delete("age"); //after deleting age, size becomes 1.
// console.log(map.size);






