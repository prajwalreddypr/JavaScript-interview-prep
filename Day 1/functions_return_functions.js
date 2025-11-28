//functions being returned from other functions

function outer(){
    function inner(){
        console.log("Hello Prajwal");
    }
    return inner;
}

let returnedFuncVar = outer();
console.log(returnedFuncVar);