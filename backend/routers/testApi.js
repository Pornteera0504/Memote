const express = require('express')

const router = express.Router()

router.get('/one', async (req, res)=>{
        try {
            res.status(200).send('Test api pass')
            return {}
        } catch (error) {
            res.status(500).send("Test api fail")
            return {}
        }
})

module.exports = router