const express = require('express')
const next = require('next')
const nextRoutes = require('./routes')
const routes = require('./server/routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = nextRoutes.getRequestHandler(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const device = require('express-device')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const db = require('./server/models')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.prepare().then(() => {
  const server = express()
  const User = db.User
  mongoose.connect('mongodb://localhost:27017/healthcare', () => {
    console.log('Connected to mongodb HCB')
  })

  server.use(cookieParser())
  server.use(bodyParser.json())
  server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false
  }))
  server.use(passport.initialize())
  server.use(passport.session())

  passport.use(new LocalStrategy(User.authenticate()))
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())

  server.use('/sw-installer.js', express.static('sw-installer.js'))
  server.use('/sw.js', express.static('sw.js'))
  server.use(device.capture())
  server.use('/api/', routes, (err) => {
    if (err) throw err
  })
  server.use(handler).listen(3000, (err) => {
    if (err) throw err
    console.log('>>>Ready on PORT: 3000')
  })
})
