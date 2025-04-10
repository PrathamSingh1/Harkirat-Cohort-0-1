const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// {
//     email: string => email
//     password: atleast 8 letters
//     country: "IN", "US"
// }


const schemaa = zod.object({
    email: zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US"))
})




app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    else {
        res.send({
            response
        })
    }
   
});

app.listen(3000);