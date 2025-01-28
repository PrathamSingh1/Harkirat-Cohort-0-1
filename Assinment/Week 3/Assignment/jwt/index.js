const jwt = require('jsonwebtoken');
const zod = require("zod");
const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    const signature = jwt.sign({
        username
    }, jwtPassword);
    return signature; 

}



function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}


function verifyJwt(token) {
    let ans = true;
    try {
        const verified = jwt.verify(token, jwtPassword);
    } catch(e) {
        ans = false;
    }
    return ans;
}
