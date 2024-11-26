const fs = require("fs");
let a = 1;
console.log(a);

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log("data read from the file is ");
    console.log(data);
})

let ans = 0;
for (let i = 0; i<100; i++) {
    ans = ans + i;
}
console.log(ans);


// do a network call
// sleep/wait for some time 
// read a file
// database call


// Above these are the only 4 cases where you need to do a asynchronous calls other than that you just write synchronous code throughtout JavaScript.




// myOwnsettimeout function

function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
    console.log("done!")
}, 1000)

console.log("hello from outside")







// promise function

function fn(resolve) {

    let a = 0;
    for(i = 1; i<100; i++) {
        a = a + i;
    }
    resolve(a);
}
const p = new Promise(fn);

p.then(function(){
    console.log("hello folks");
})