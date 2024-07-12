const express = require('express');
const router = express.Router();
const { createCourse, enrollCourse } = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/courses', authMiddleware, createCourse);
router.post('/enroll', authMiddleware, enrollCourse);

module.exports = router;
