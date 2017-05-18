const express = require('express')
const routes = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

//controller consts
const userController = require('./controllers/userController')
const doctorController = require('./controllers/doctorController')
const clinicController = require('./controllers/clinicController')
const pharmacieController = require('./controllers/pharmacieController')
const hospitalController = require('./controllers/hospitalController')
const labController = require('./controllers/labController')
const imageController = require('./controllers/imageController')
//router setupz
routes.post('/image-upload', upload.single('file'), imageController.post)
routes.post('/signup', userController.post)
routes.post('/doctor-registration', doctorController.post)
routes.post('/clinic-registration', clinicController.post)
routes.post('/hospital-registration', hospitalController.post)
routes.post('/pharmacie-registration', pharmacieController.post)
routes.post('/lab-registration', labController.post)

//edit routes
routes.put('/doctor-edit/:id', doctorController.put)

routes.get('cmd/doctors', doctorController.getAll)
routes.get('/clinics', clinicController.getAll)
routes.get('/pharmacies', pharmacieController.getAll)
routes.get('/labs', labController.getAll)
routes.get('/hospitals', hospitalController.getAll)

module.exports = routes;
