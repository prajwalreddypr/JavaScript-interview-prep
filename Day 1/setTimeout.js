// setTimeout(callback, delayInMillioseconds, arg1, arg2...)


// setTimeout(() => {
//     console.log("Print this after 3 seconds.");
// }, 3000);

// function greet(name1, name2){
//     console.log(`Hello ${name1} and hello ${name2}`);
// }

// setTimeout(greet, 3000, "Prajwal", "Roahn");

//cancelling a timeout

// let timer = setTimeout(() => {
//     console.log("This will never run");
// }, 3000);

// clearTimeout(timer);
// console.log("Timeout Cleared");


let timer = setTimeout(() => {
    console.log("This will run after 3 seconds");
}, 3000);


console.log("This prints first.")