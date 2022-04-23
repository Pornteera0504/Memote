const express = require('express')

const router = express.Router()

const { categories, allTask, categoryTask } = require('../controllers/landingController')

router.get('/categories', categories)
router.get('/all/tasks', allTask)
router.get('/matching/tasks', categoryTask)

module.exports = router