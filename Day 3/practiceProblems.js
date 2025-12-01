//add 2 numbers

// function add(a,b){
//     return a+b;
// }

// console.log(add(5,6));

// Convert a number to a string.
// let num = 23;
// let string = String(num);
// console.log(string)
// console.log(typeof(string))




// Get the last 3 characters of a string.
// let str = "heyThereIamInParis";
// console.log(str.slice(-3));


// Count how many vowels are in a string.
// let str = "helloWorldBonjour";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for(let char of str){
//     if(vowels.includes(char)){
//         count += 1;
//     }
// }
// console.log(count);

// Check if a string contains "@gmail.com".
// let email = "reddyprajwal2000@gmail.com";
// console.log(email.includes("@gmail.com"));


// Capitalize the first letter of a string.
// let greeting = "hello Paris";
// console.log(greeting[0].toUpperCase() + greeting.slice(1));

// // Replace all spaces in a string with "-".

// let str = "Hello Vitry Sur Seine, HOW are you doing ?"
// //replace() -> only replaces the 1st occ. replaceAll() -> replaces all the occ.
// let newStr = str.replaceAll(" ", "-");
// console.log(newStr);


// Given "12345", sum all its digits.



// Check if two strings are equal ignoring case.

// Reverse a number (e.g., 123 → 321).



//printing numbers 1 to 100
// for(let i=1; i<=100; i++){
//     console.log(i);
// }


//even numbers between 1 and 50

// for(let n =1; n<= 50; n++){
//     if(n%2 === 0){
//         console.log(n);
//     }
// }

//sum of numbers from 1 to 100
// sum = 0;

// for(i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

//looping through the string "javascript "
// string = "JavaScript";

// for(let char of string){
//     console.log(char);
// }

// //reversing a string manually

// let str = "parisLoveCity"
// let rev_str = "";

// for(let i = str.length - 1; i >=0; i--){
//     rev_str += str[i];
// }

// console.log(rev_str);


//multiplication table
// for(i=1; i<=10; i++){
//     console.log(`7 X ${i} = ${7*i}`);
// }


//counting number of difits in a number:

// let num = 54334653453;
// let conv = String(num);        //converting to string and finding length aste.
// let count = conv.length;
// console.log(count);

//FACTORIAL OF A NUMBER
// let number = 5;
// let fact = 1;

// for(let i=1; i<=number; i++){
//     fact = fact * i;
// }

// console.log(fact);




//FACTORIAL OF A NUMBER< ONCE AGAIN
// let num = 4;
// let fact = 1;

// for(let i=1; i<=num; i++){
//     fact = fact * i;
// }

// console.log(fact);


//OCCUREENCES OF A LETTER IN A STRING. HERE i
// let string = "parisIsLovelyCity";
// let count = 0

// for (let char of string){
//     if(char =="I" || char == "i"){
//         count += 1;
//     }
// }

// console.log(count);


//simple triangle pattern

let rows = 5;

for(let i=1; i<= rows; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}


