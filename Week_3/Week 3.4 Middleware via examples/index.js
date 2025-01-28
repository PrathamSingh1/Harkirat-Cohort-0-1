const express = require("express");
const app = express();

function ticketChecker(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") {
    next();
  } else {
    res.status(403).send("Access denied");
  }
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.use(ticketChecker);

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.send("You rode the first ride!");
});

app.get("/ride2", function (req, res) {
  res.send("You rode the first ride!");
});

app.get("/ride3", function (req, res) {
  res.send("You rode the first ride!");
});

app.listen(3000);