// A function in JavaScript is a set of statements that performs a task or calculates a value

// It should take some input and return an output where there is some obvious relationship between the input and the output.

function findSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = findSum(3);
console.log(ans);