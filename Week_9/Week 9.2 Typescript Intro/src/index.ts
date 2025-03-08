// let x: number = 1; 
// console.log(x);

// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }

// greet("pratham");


// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(2,4);
// console.log(value);


// function isLegal(age: number) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let x = isLegal(18);
// console.log(x);



// function runAfter1S(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// runAfter1S(function() {
//     console.log("hi there");
// })


// interface User {
//     firstName: string;
//     lastName: string;
//     age: number
// }

// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function greet(user: User) {
//     console.log("hi there " + user.firstName);
// }

// isLegal({
//     firstName: "pratham",
//     lastName: "singh",
//     age: 20
// })




//              type and interface

// type User = {
//     firstName: string;
//     lastName: string;
//     age: number
// }

// interface User2 {
//     firstName: string;
//     lastName: string;
//     age: number
// }


//      1. Unions
//      Let's say you wnat to print the id of a user, which can be a number or a string.(You can not do this using interfaces)


// type GreetArg = number | string;

// function greet(id: GreetArg) {

// }

// greet(1);
// greet("1");



//      2. Intersection
//      What if you want to create a type that has every property of multiple types / interfaces ( You can not do this using interfaces)



// type Employee = {
//     name: string;
//     startDate: Date;
// };

// interface Manager {
//     name: string;
//     department: string;
// };

// type TechLead = Employee & Manager;
// const t: TechLead = {
//     name: "pratham",
//     startDate: new Date(),
//     department: "Software "
// }




//          Arrays in TS

// If you want to access arrays in typescript, it's as simple as adding a [] annotation next to the type

type NumberArr = number[];

function maxValue(arr: NumberArr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));


// interfaces can be implemented by classes

// types let u do unions and intersections