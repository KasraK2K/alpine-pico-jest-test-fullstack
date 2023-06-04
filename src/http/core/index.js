require('../../boot')
const express = require('express')
const http = require('http')
const compression = require('compression')
const cors = require('cors')
const _ = require('lodash')
const app = express()
const server = http.createServer(app)
const port = +process.env.PORT || 3000

process.env.NODE_ENV === 'production' && app.enable('view cache')
app.set('view engine', 'ejs')
app.set('views', './views/pages')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(cors())
app.use(express.static('statics'))

module.exports = { app, server, port }
