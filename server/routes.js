import express from 'express'
const routes = express()

//controller imports
import userController from './controllers/userController'
import doctorController from './controllers/doctorController'
import clinicController from './controllers/clinicController'

//router setup
routes.post('/signup', userController.post)
routes.get('/doctors', doctorController.getAll)
routes.post('/doctor-registration', doctorController.post)
routes.post('/clinic-registration', clinicController.post)
routes.get('clinics', clinicController.getAll)
export default routes
