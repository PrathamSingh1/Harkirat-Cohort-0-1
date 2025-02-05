// you can call one function inside another function.

//  callback functions

function square(a) {
    return a * a 
}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

sumOfSomething(a, b, square)




// Anonymous functions

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

sumOfSomething(a, b, function(a) {
    return a * a 
})