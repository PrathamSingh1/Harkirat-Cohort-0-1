const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { User } = require("../db");
const JWT_SECRET = require("../config");

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6, "Password must be at least 6 characters"),
    firstName: zod.string().min(2, "First name must be at least 2 characters"),
    lastName: zod.string().min(2, "Last name must be at least 2 characters")
});

router.post("/signup", async (req, res) => {
    const body = req.body;
    const validationResult = signupSchema.safeParse(req.body);
    if (!validationResult.success) {
        return res.json({
            message: "Invalid input data",
            errors: validationResult.error.format()
        });
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if (user._id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })

})

module.exports = router;
