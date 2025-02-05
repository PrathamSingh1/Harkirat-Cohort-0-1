// Why do you need input validation?
// Lets see with an example.

// What if the user sends the wrong body?

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    // do something with kidney here

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kideny length is " +  kidneyLength);
});

// global catches
app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3000);