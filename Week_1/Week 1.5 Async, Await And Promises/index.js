// const fs = require("fs");
// // filesystem module

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })

// console.log("hello world");

// // latentflip.com/loupe






// //      Cleaner way (promises)

// const fs = require('fs');

// // my own asynchronous function
// function kiratReadFile() {
//     return new Promise(function(resolve) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data);
//         });
//     })
// }

// // callback function to call
// function onDone(data) {
//     console.log(data)
// }

// kiratReadFile().then(onDone);






// // Normal syntax

// function kiratsAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         resolve("hi there!")
//     });
//     return p;
// }

// function main() {
//     kiratsAsyncFunction().then(function(value) {
//         console.log(value);
//     });
// }

// main();







// Async/await syntax

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
}

main();  