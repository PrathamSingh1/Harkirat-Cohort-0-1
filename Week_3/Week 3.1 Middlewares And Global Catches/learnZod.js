const z = require("zod");

// if this is an array of number with atleast 1 input, return true, else return false

function validateInput(arr) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput({
    email: "something@gmail.com",
    password: "123456789"
});




//   Question


// {
//     email => string => should look like email
//     password => should have 8 letters
// }



//   ans



