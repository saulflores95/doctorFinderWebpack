import express from 'express'
const routes = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

//controller imports
import userController from './controllers/userController'
import doctorController from './controllers/doctorController'
import clinicController from './controllers/clinicController'
import pharmacieController from './controllers/pharmacieController'
import hospitalController from './controllers/hospitalController'
import labController from './controllers/labController'
import imageController from './controllers/imageController'
//router setupz
routes.post('/image-upload', upload.single('file'), imageController.post)
routes.post('/signup', userController.post)
routes.post('/doctor-registration', doctorController.post)
routes.post('/clinic-registration', clinicController.post)
routes.post('/hospital-registration', hospitalController.post)
routes.post('/pharmacie-registration', pharmacieController.post)
routes.post('/lab-registration', labController.post)

routes.get('/doctors', doctorController.getAll)
routes.get('/clinics', clinicController.getAll)
routes.get('/pharmacies', pharmacieController.getAll)
routes.get('/labs', labController.getAll)
routes.get('/hospitals', clinicController.getAll)

export default routes
