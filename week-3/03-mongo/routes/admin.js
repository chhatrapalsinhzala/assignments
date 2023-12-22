const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const generateUniqueId = require("../utils/generateuniqueid");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({ message: 'Admin created successfully' })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    // console.log(req.body.price)
    // console.log(typeof(req.body.price))
    const courseId = generateUniqueId()
    // console.log(courseId)
    // console.log(req.headers.username)
    Course.create({
        id : courseId,
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        createdBy : req.headers.username
    })
    res.json({ message: 'Course created successfully', courseId: courseId })
});

router.get('/courses', adminMiddleware,  (req, res) => {
    // Implement fetching all courses logic
    
    let username = req.headers.username
    // console.log(username)

    Course.find({createdBy : username}).then(function(courses){
        res.status(200).json({ courses }) 
    })
    // console.log(courses)
});

module.exports = router;