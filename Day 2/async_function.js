function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 5000);
    });
}

// getData()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     })

async function fetchData(){
    try{
        const result = await getData();
        console.log(result);

    } catch(error){
        console.error(error);

    }
}

fetchData();