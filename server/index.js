require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require('express-session')

const app = express()
app.use(cors())
app.use(express.json())
app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false
}))
const PORT = process.env.PORT

import Auth from './middleware/Auth'

import DatabaseController from './controllers/DatabaseController'

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})

