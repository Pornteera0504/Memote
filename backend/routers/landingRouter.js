const express = require('express')

const router = express.Router()

const { categories, allTask } = require('../controllers/landingController')

router.get('/categories', categories)
router.get('/all/tasks', allTask)

module.exports = router