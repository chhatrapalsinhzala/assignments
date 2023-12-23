const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const { User, Course } = require("../db");
const { privateKey } = require("../utils/generateuniqueid");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username = req.body.username
    let password = req.body.password
    const isUserExist = await User.exists({username : username})
    console.log(isUserExist)
    if (isUserExist){
        res.status(404).json({message : "User already exist."})
    }else{
        User.create({
            username : username,
            password : password
        })
        res.json({ message: 'User created successfully' })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username
    let password = req.body.password
    const isUserExist = await User.exists({username : username, password : password})
    console.log(isUserExist)
    if (isUserExist){
        let token = jwt.sign({username : username }, privateKey)
        res.json({token : token})
    }else{
        res.status(404).json({ message: 'Invalid Credentials.' })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(function(courses){
        res.json({courses})
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    console.log(courseId)
    try{
        let isExits = await Course.exists({_id : courseId})
        if (isExits) {
            await Course.findByIdAndUpdate( courseId, { $set : {purchasedBy : req.username}})
            res.status(200).json({ message: 'Course purchased successfully' }) 
        } 
    }catch(e){
        res.status(404).json({ message: 'Course not found.' }) 
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let purchasedCourses = await Course.find({purchasedBy : req.username})
    res.json({purchasedCourses})
});

module.exports = router