const jwt = require("jsonwebtoken");
const secret = require("../index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.header.authorization;
    // Bearer aasdfasdf => ["Bearer", "aasdfasdf"];
    const words = token.split(" ");
    const jwtToken = words[1]
    
}

module.exports = adminMiddleware;