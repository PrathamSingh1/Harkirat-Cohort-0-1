"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: "Pratham",
    age: 20
}, {
    name: "Uttam",
    age: 19
});
console.log(age);
