require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT

import DatabaseController from './controllers/DatabaseController'

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})

const db = new DatabaseController()
db.test()

