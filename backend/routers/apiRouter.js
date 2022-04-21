const express = require('express')
const router = express.Router()

const api = require('./api')

router.use('/test-rout', api)

/// เพื่อดูสถานะการทำ Router ตรงนี้ว่าสำเร็จไหม
router.use('/server-status', (req, res) => {
    res.status(200).send('Active')
})

router.use('/*', (req, res) => {
    res.status(404).send('Not found.')
})

module.exports = router