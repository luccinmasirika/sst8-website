const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const debug = require('debug')('http')
const { server } = require('./config/index')

// START APPLICATION
const app = express()

// STATICS FILES
app.use('/assets', express.static(path.join(__dirname, 'public')))

// SET VIEWS ENGINE
app.set('vews', './views')
app.set('view engine', 'ejs')

app.listen(server.port, (err, fallback) => {
  if (err) return console.log('Error with server')
  debug(
    `Server listen on port ${server.port} and run on ${server.host}:${server.port}`
  )
})
