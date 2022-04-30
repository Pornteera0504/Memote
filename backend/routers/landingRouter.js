const express = require('express')

const router = express.Router()

const { categories, allTask, categoryTask } = require('../controllers/landingController')

router.get('/categories', categories)
router.post('/all/tasks', allTask)
router.post('/matching/tasks', categoryTask)

module.exports = router