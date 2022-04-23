const express = require('express')
const app = express()

require('dotenv').config({ path: './.env' })

const apiRouter = require('./routers/apiRouter')

const jsonParser = express.json()
app.use(jsonParser)

app.use(process.env.ROOT_PATH, apiRouter)

const port = 3000
    app.listen(port, () => {
        console.log(`[Server] Listening on port ${port}`)
    })