import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import About from '../about/About'
import NotFound from '../notfound/NotFound'

import doctors from '../../../static_db/doctors.json'
import DoctorWrapper from '../doctors/docWrapper/DoctorWrapper'
import DoctorDetail from '../doctors/docDetail/DoctorDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <DoctorWrapper doctors={doctors} />} />
    <Route exact path='/doctors' component={() => <DoctorWrapper doctors={doctors} />} />
    <Route exact path='/doctors/:id' component={props => {
      const doctor = doctors.filter(doctor => props.match.params.id === doctor._id)
      console.log(doctor)
      return <DoctorDetail doctor={doctor[0]} />
    }} />
    <Route exact path='/about' component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
