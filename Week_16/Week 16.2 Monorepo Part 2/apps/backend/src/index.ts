import express from "express";
import { BACKEND_URL, VALUE } from "@pratham/common/config";


console.log(BACKEND_URL);
console.log(VALUE);
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    })
})

app.listen(3000);