//simple function
// function greet(name){
//     return `Hello ${name}`;
// }

// console.log(greet("Prajwal"));


//FUNCTION THAT RETURNS THE SQUARE OF A NUMBER
// const squared = function (num){
//     return num * num;
// }

// console.log(squared(8));



//DEFAULT PARAMETERS
// function multiply(a, b=1){
//     return a*b;
// }

// console.log(multiply(3)); //by default b is equal to 1.
// console.log(multiply(4,43));




//CALLBACK FILTERING

function filterEven(arr, callback){
    let result = [];

    for (let item of arr){
        if(callback(item)){
            result.push(item);
        }
    }
    return result;
}

const isEven = function(num){
    return num%2 == 0;
}

console.log(filterEven([1,2,3,4,5], isEven));
