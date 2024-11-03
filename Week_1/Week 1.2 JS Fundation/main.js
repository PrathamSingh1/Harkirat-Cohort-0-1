                // Simple primitives

// Variables (let, var, const)
// Data types - strings, numbers and booleans
// If/else
// Loops - For loop


//      Let's write some code-
//1. Write the program to greet a person given their first and last name
//2. Write a program that greets a person based on their gender.(if else)
//3. Write a program that counts from 0 - 1000 and prints (for loop)






//1. Arrays
//2. Objects


// Let's write some code-

//1. Write a program prints all the even numbers in an array
//2. Write a program to print the biggest number in an array
//3. Write a program that prints all the male people's first name given a complex object
//4. Write a program that reverses all the elements of an array


// arrays

// const ages = [21, 22, 23, 24, 25];

// for(let i = 0; i < ages.length; i++){
//     if(ages[i] % 2 == 0)
//         console.log(ages[i]);
// }



// objects


// const users1 = {
//     firstName: "harkirat",
//     gender: "male"
// }
// console.log(users1["firstName"])


// Array of an object

// const allUsers = [{
//     firstName: "harkirat",
//     gender: "male",
// }, {
//     firstName: "raman",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
// }]

// for (let i = 0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"] == 'male'){
//         console.log(allUsers[i]["firstName"])
//     }
// }




                // Functions

// function sum(a, b){
//     // do things with the input and return an output
//     const sumValue = a + b;
//     return sumValue;
// }

// const value = sum(1, 2)
// console.log(value);

// ---------------------------------------------


//      callbacks

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // you are only allowed to call one function after this 
// // how will you displayResult of a sum

// const ans = sum(1, 2, displayResult);




// --------------------------------------------



// function calculateArithmetic(a, b, type) {
//     if (type == "sum"){
//         return a + b;
//     }
//     if (type == "minus") {
//         return a - b ;
//     }

// }

// const value = calculateArithmetic(1, 2, "minus");
// console.log(value);





// function calculateArithmetic(a, b, airthmeticFinalFunction) {
//     const ans = airthmeticFinalFunction(a, b)
//     return ans;
// }

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }

// const value = calculateArithmetic(1, 2, sum);
// console.log(value);






//  setTimeout

// function greet() {
//     console.log("hello world");
// }

// setTimeout(greet, 1 * 1000)