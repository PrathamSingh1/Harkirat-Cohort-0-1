const mongoose = require('mongoose');

console.log("Starting connection...");

mongoose.connect("mongodb://localhost:27017/Paytm")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})
    
// Created a Schema for Users

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Created a model from the schema

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};