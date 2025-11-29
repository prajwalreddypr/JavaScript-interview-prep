// Promises are objects representing the states.

// 1. Pending state
// 2. Fulfilled
// 3. Rejected

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data fetched');
        }, 3000);
    });


}

getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });