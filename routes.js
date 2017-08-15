const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

//  Doctor related routes
routes.add('doctors-speciality', '/doctors-speciality/:id')
routes.add('doctor-detail', '/doctor-detail/:id')
routes.add('doctor-edit', '/doctor-edit/:id')
routes.add('doctor-registration', '/doctor-registration')

//  Hospital related routes
routes.add('hospital-detail', '/hospital-detail/:id')
routes.add('hospital-registration', '/hospital-registration')
routes.add('hospital-edit', '/hospital-edit/:id')

//  Clinic Related routes
routes.add('clinic-detail', '/clinic-detail/:id')
routes.add('clinic-registration', '/clinic-registration')
routes.add('clinic-edit', '/clinic-edit/:id')

//  Laboratories Related routes
routes.add('laboratorie', '/laboratorie/:id')
routes.add('laboratories-detail', '/laboratories-detail/:id')
routes.add('laboratories-registration', '/laboratories-registration')
routes.add('laboratories-edit', '/laboratories-edit/:id')

//  Laboratories Related routes
routes.add('pharmacie-map', '/pharmacie-map/:id')
routes.add('pharmacie-detail', '/pharmacie-detail/:id')
routes.add('pharmacie-registration', '/pharmacie-registration')
routes.add('pharmacie-edit', '/pharmacie-edit/:id')

routes.add('currency-value', '/currency-value')

routes.add('dev', '/dev')
