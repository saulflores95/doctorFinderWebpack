const db = require('../models')
const passport = require('passport')

const userController = {}

userController.register = (req, res) => {
  db.User.register(new db.User({ username: req.body.username }), req.body.password, function (err, account) {
    if (err) {
      console.log(err)
      return res.send(err)
    }
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return console.log(err)
        }
        res.send('User registered')
      })
    })
  })
}

module.exports = userController
