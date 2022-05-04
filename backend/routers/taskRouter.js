const express = require('express')

const router = express.Router()

const { taskDetail, modifyTask, deleteTask } = require('../controllers/taskController')

router.post('/task/detail', taskDetail)
router.post('/task/modify', modifyTask)
router.delete('/task/delete/:id', deleteTask)

module.exports = router