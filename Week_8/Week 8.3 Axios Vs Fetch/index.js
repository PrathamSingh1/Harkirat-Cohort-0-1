        // axios vs fetch for api calls

const axios = require("axios");

// function main() {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json.length);

//         })
// }



// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const json = await response.json();
//     console.log(json.length);
// }


async function main() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    // response.data(will be your final json data comming from the api)
    console.log(response.data.length);
}



main();