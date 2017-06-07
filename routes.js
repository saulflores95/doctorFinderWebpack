const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

//  Doctor related routes
routes.add('doctors-speciality', '/doctors-speciality/:id')
routes.add('doctor-detail', '/doctor-detail/:id')
routes.add('doctor-edit', '/doctor-edit/:id')

//  Hospital related routes
routes.add('hospital-detail', '/hospital-detail/:id')

//  Clinic Related routes
routes.add('clinic-detail', '/clinic-detail/:id')

//  Laboratories Related routes
routes.add('laboratories-map', '/laboratories-map/:id')
routes.add('laboratories-detail', '/laboratories-detail/:id')

//  Laboratories Related routes
routes.add('pharmacie-map', '/pharmacie-map/:id')
routes.add('pharmacie-detail', '/pharmacie-detail/:id')
