const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.send({ message: 'User created successfully' })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(function(course){
        res.json(course)
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    try{
        let isExits = await Course.exists({_id : courseId})
        if (isExits) {
            await Course.findByIdAndUpdate( courseId, { $set : {purchasedBy : req.headers.username}})
            res.status(200).json({ message: 'Course purchased successfully' }) 
        } 
    }catch(e){
        res.status(404).json({ message: 'Course not found.' }) 
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let purchasedCourses = await Course.find({purchasedBy : req.headers.username})
    res.json({purchasedCourses})

});

module.exports = router