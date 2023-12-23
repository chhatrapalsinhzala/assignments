const jwt = require('jsonwebtoken');
const { privateKey } = require('../utils/generateuniqueid');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization.split(" ")[1]
    try{
        jwt.verify(token, privateKey, function(err, decoded){
            req.username  = decoded.username
            next()
        });
    } catch {
        res.status(404).json({error : "Invalid credentials." })
        return
    }
    
}

module.exports = adminMiddleware;