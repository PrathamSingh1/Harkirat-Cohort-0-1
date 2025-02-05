const jwt = require("jsonwebtoken");


// decode, verify, sign

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

// jwt
// const token = jwt.sign(value, "secret");
// console.log(token); 

// this token has been generated using this secret, and hence this token can only be verified using this secret




let v = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTczODA5MTEwNX0.YMtwqi-ntJFkjPBg0QMEtFDDq-xUgM3pj_GwwqEgTxc";
// const read = jwt.decode(v);
// console.log(read);


const access = jwt.verify(v, "secret");
console.log(access);