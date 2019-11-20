if (process.env.NODE_ENV === 'development') require('dotenv').config()

require('./config/mongoose')

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

app.use('/', require('./routes'))
app.use(require('./middlewares/errorHandler'))

module.exports = app
