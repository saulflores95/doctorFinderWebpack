const express = require('express')
const routes = express()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var passport = require('passport')

//  controller consts
const userController = require('./controllers/userController')
const doctorController = require('./controllers/doctorController')
const clinicController = require('./controllers/clinicController')
const pharmacieController = require('./controllers/pharmacieController')
const hospitalController = require('./controllers/hospitalController')
const labController = require('./controllers/labController')
const imageController = require('./controllers/imageController')
const mailController = require('./controllers/mailController')
// mailing routes

routes.post('/email', mailController.post)
//  Registration Routes
routes.post('/image-upload', upload.single('file'), imageController.post)
routes.post('/doctor-registration', doctorController.post)
routes.post('/clinic-registration', clinicController.post)
routes.post('/hospital-registration', hospitalController.post)
routes.post('/pharmacie-registration', pharmacieController.post)
routes.post('/lab-registration', labController.post)

//  Edition routes
routes.put('/doctor-edit/:id', doctorController.put)
routes.put('/clinic-edit/:id', clinicController.put)
routes.put('/hospital-edit/:id', clinicController.put)
routes.put('/lab-edit/:id', clinicController.put)

//  Get data rouetes
routes.get('/doctors', doctorController.getAll)
routes.get('/clinics', clinicController.getAll)
routes.get('/pharmacies', pharmacieController.getAll)
routes.get('/labs', labController.getAll)
routes.get('/hospitals', hospitalController.getAll)

//  auth routes

routes.post('/register', userController.register)

routes.get('/login', function (req, res) {
  res.render('login', { user: req.user })
})

routes.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
      console.log(err)
    }
    return res.status(200).json({
      succes: true,
      data: req.user
    })
  })
})

routes.get('/logout', (req, res, next) => {
  req.logout()
  req.session.save((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

routes.get('/user', (req, res) => {
  return res.status(200).json({
    succes: true,
    data: req.user
  })
})

module.exports = routes
