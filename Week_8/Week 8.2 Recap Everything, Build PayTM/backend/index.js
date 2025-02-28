const express = require('express');
const mongoose = require('mongoose');
require("./db");
const mainRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());



const app = express();

app.use("/api/v1", mainRouter);

// /api/v1/user/singup
// /api/v1/user/singin
// /api/v1/user/changePassword...

// /api/v1/account/transferMoney
// /api/v1/account/balance


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
