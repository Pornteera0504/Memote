const express = require('express')

const router = express.Router()

const { taskDetail } = require('../controllers/taskController')

router.get('/task/detail', taskDetail)

module.exports = router