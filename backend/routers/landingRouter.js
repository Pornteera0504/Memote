const express = require('express')

const router = express.Router()

const { categories } = require('../controllers/landingController')

router.get('/categories', categories)

module.exports = router