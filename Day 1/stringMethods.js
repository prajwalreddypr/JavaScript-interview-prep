// let string = "JavaScript";

// console.log(string.length);
// console.log(string.slice(0,4));
// console.log(string.substring(4));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.split(''));
// console.log(string.includes("Script"));
// console.log(string.startsWith("Java"));
// console.log(string.endsWith("Script"));
// console.log(string.replace("Java", "Type"));

// let s = "Hello World";
// let new_s = s.toLowerCase();
// console.log(new_s);

// let string = "helloworld";
// console.log(string.slice(5,));

// let string = "JavaScript is bad";
// console.log(string.replace("bad", "good"));

//counting vowels in a string
// let string = "I love you Paris";

// const vowels = "aeiouAEIOU";
// let count = 0;

// for (let char of string){
//     if(vowels.includes(char)) count++;
// }
// console.log(count)

let string = "I love you India";
let count = 0;
const vowels = "aeiouAEIOU";

for (let char of string){
    if(vowels.includes(char)) count++;
}

console.log(count);

//template literal
let x = 25;
console.log(`My age next year is ${x + 1}`);

