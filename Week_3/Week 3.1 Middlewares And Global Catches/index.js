const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;


    if (username !== "harkirat" || password !== "pass") {
        // do something with kidney here
        res.status(400).json({"msg": "somethings up with your inputs"})
        return
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Something up with your inputs"})
        return
    }

    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000);





// other way of doing it by middleware (optimize)

const app = express();
function userMiddleware(req, res, next) {
    if (username != "harkirat" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kdney here

    res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here

    res.send("Your kidney is healthy");
});

app.get("/heart-check", userMiddleware, function (req, res) {
    // do something with user here

    res.send("Your heart is healthy");
});