const express = require('express')
const next = require('next')
const nextRoutes = require('./routes')
const routes = require('./server/routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = nextRoutes.getRequestHandler(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.prepare().then(() => {
  const server = express()
  mongoose.connect('mongodb://localhost:27017/healthcare', () => {
    console.log('Connected to mongodb HCB')
  })
  server.use(bodyParser.json())
  server.use('/sw.js', express.static('sw-installer.js'));
  server.use('/api/', routes, (err) => {
    if(err) throw err
  })
  server.use(handler).listen(3000, (err) => {
    if (err) throw err
    console.log('>>>Ready on PORT: 3000')
  })

})
