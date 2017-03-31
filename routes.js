const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
const routesExpress = require('./server/routes')
//Doctor related routes
routes.add('doctors-speciality', '/doctors-speciality/:id')
routes.add('doctor-detail', '/doctor-detail/:id')

//Hospital related routes
routes.add('hospital-detail', '/hospital-detail/:id')
