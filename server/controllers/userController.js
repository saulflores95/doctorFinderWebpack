const db = require('../models')
const passport = require('passport')

const userController = {};

userController.register = (req, res) => {
  const {
    username,
    password
  } = req.body

  db.User.register(new db.User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log(err)
        return res.send(err)
      }
      passport.authenticate('local')(req, res, function () {
          req.session.save(function (err) {
              if (err) {
                  return next(err);
              }
              res.send('User registered')
          });
      });
  });

}

module.exports = userController
