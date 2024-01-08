const { Admin } = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const isAdminExist = await Admin.exists({username : req.headers.username})
    if(isAdminExist){
        console.log(isAdminExist)
        next()
    }
    else{
        res.status(404).json({message : "Invalid Credentials"})
        return        
    }
}

module.exports = adminMiddleware;