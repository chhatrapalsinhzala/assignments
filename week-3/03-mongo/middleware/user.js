const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const isUserExist = await User.exists({username : req.headers.username})
    if(isUserExist){
        console.log(isUserExist)
        next()
    }
    else{
        res.status(404).json({message : "Invalid Credentials"})
        return        
    }
}

module.exports = userMiddleware;