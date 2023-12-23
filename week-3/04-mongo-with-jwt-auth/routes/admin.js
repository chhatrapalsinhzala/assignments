const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require('jsonwebtoken');
const {generateUniqueId, privateKey} = require("../utils/generateuniqueid");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username
    let password = req.body.password
    const isUserExist = await Admin.exists({username : username})
    console.log(isUserExist)
    if (isUserExist){
        res.status(404).json({message : "Admin already exist."})
    }else{
        Admin.create({
            username : username,
            password : password
        })
        res.json({ message: 'Admin created successfully' })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username
    let password = req.body.password
    const isUserExist = await Admin.exists({username : username, password : password})
    console.log(isUserExist)
    if (isUserExist){
        let token = jwt.sign({username : username }, privateKey)
        res.json({token : token})
    }else{
        res.status(404).json({ message: 'Invalid Credentials.' })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
    let courseId = generateUniqueId()
    try{
        console.log(req.username)
        Course.create({
            id : courseId,
            title : req.body.title,
            description : req.body.description,
            price : req.body.price,
            imageLink : req.body.imageLink,
            createdBy : req.username
        })
        res.json({ "message": 'Course created successfully', "courseId": courseId })

        
    } catch {
        res.status(404).json({error : "Invalid credentials." })
    }

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let token = req.headers.authorization.split(" ")[1]
    console.log(token)
    
    Course.find({
        createdBy : req.username
    }).then(function(courses){
        res.json({courses})
    })
    
});

module.exports = router;