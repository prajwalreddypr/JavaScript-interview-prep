// function fetchData() {
//     setTimeout(() => {
//         console.log("Hello after 5 seconds");
//     }, 5000);
// }

// fetchData();

// function greet(name){
//     console.log(`Heelo ${name}`);
// }

// setTimeout(greet, 4000, "Prajwal");



let timer  = setTimeout(() => {
    console.log("This will not run");
}, 3000);


clearTimeout(timer);
console.log("Timeout Cleared");
