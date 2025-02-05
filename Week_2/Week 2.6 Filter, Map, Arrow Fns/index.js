// map, filter, arrow fns


// Arrow function

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const ans = sum(1, 2);
// console.log(ans);


// Map

// Given an array, give me back a new array in which every value is multiplied by 2
//[1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

// one solution 
// const newArray = [];

// for(let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);


// other solution

// const transform = (i)=>{
//     return i * 2;
// }

// const ans = input.map(transform);
// console.log(ans);









// filtering

// what if I tell u, given an input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5];

// one solution 

// const newArr = [];
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);



// other solution 



const ans = arr.filter(function (n) {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(ans);