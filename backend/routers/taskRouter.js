const express = require('express')

const router = express.Router()

const { taskDetail, modifyTask } = require('../controllers/taskController')

router.get('/task/detail', taskDetail)
router.post('/task/modify', modifyTask)

module.exports = router