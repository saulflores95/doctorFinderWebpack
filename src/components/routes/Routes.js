import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import About from '../about/About'
import NotFound from '../notfound/NotFound'

import doctors from '../../../static_db/doctors.json'
import DoctorWrapper from '../doctors/docWrapper/DoctorWrapper'
import DoctorDetail from '../doctors/docDetail/DoctorDetail'

import pharmacies from '../../../static_db/pharmacies.json'
import PharmacieWrapper from '../pharmacies/phaWrapper/PharmacieWrapper'
import PharmacieGeneralMap from '../pharmacies/phaMap/PharmacieGeneralMap'
import PharmacieDetail from '../pharmacies/phaDetail/PharmacieDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <DoctorWrapper doctors={doctors} />} />
    <Route exact path='/doctors' component={() => <DoctorWrapper doctors={doctors} />} />
    <Route exact path='/doctors/:id' component={props => {
      const doctor = doctors.filter(doctor => props.match.params.id === doctor._id)
      return <DoctorDetail doctor={doctor[0]} />
    }} />
    <Route exact path='/pharmacies' component={() => <PharmacieWrapper pharmacies={pharmacies} />} />
    <Route exact path='/pharmacies/:tag' component={props => {
      const pharmaciesFiltered = pharmacies.filter(pharmacie => props.match.params.tag === pharmacie.tag)
      return <PharmacieGeneralMap pharmacies={pharmaciesFiltered} />
    }} />
    <Route exact path='/pharmacies/:tag/:id' component={props => {
      const pharmaciesFiltered = pharmacies.filter(pharmacie => props.match.params.id === pharmacie._id)
      return <PharmacieDetail pharmacie={pharmaciesFiltered} />
    }} />
    <Route exact path='/about' component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
