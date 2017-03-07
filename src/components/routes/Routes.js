import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import AsyncRoute from '../AsyncRoute/AsyncRoute'
import GeneralMap from '../map/GeneralMap'

import doctors from '../../../static_db/doctors.json'
import pharmacies from '../../../static_db/pharmacies.json'
import clinics from '../../../static_db/clinics.json'
import hospitals from '../../../static_db/hospitals.json'
import labs from '../../../static_db/labs.json'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={props => <AsyncRoute props={Object.assign({}, props, doctors)} loading={System.import('../doctors/docWrapper/DoctorWrapper')} />} />
    <Route exact path='/doctors' component={props => <AsyncRoute props={Object.assign({}, props, doctors)} loading={System.import('../doctors/docWrapper/DoctorWrapper')} />} />
    <Route exact path='/doctors/:specialty' component={props => {
      const doctor = doctors.doctors.filter(doctor => props.match.params.specialty === doctor.specialty)
      return <AsyncRoute props={Object.assign({}, props, {doctor: doctor})} loading={System.import('../doctors/docWrapper/docListWrapper/DocListWrapper')} />
    }} />
    <Route exact path='/doctors/:specialty/:id' component={props => {
      const doctor = doctors.doctors.filter(doctor => props.match.params.id === doctor._id)
      return <AsyncRoute props={Object.assign({}, props, {doctor: doctor[0]})} loading={System.import('../doctors/docDetail/DoctorDetail')} />
    }} />

    <Route exact path='/clinics' component={props => <AsyncRoute props={Object.assign({}, props, clinics)} loading={System.import('../clinics/cliWrapper/ClinicWrapper')} />} />
    <Route exact path='/clinics/:id' component={props => {
      const clinic = clinics.clinics.filter(clinic => props.match.params.id === clinic._id)
      return <AsyncRoute props={Object.assign({}, props, {clinic: clinic[0]})} loading={System.import('../clinics/cliDetail/ClinicDetail')} />
    }} />

    <Route exact path='/pharmacies' component={props => <AsyncRoute props={Object.assign({}, props, pharmacies)} loading={System.import('../pharmacies/phaWrapper/PharmacieWrapper')} />} />
    <Route exact path='/pharmacies/:tag' component={props => {
      const pharmacie = pharmacies.pharmacies.filter(pharmacie => props.match.params.tag === pharmacie.tag)
      return <AsyncRoute props={Object.assign({}, props, {pharmacies: pharmacie})} loading={System.import('../pharmacies/phaMap/PharmacieGeneralMap')} />
    }} />
    <Route exact path='/pharmacies/:tag/:id' component={props => {
      const pharmaciesFiltered = pharmacies.pharmacies.filter(pharmacie => props.match.params.id === pharmacie._id)
      return <AsyncRoute props={Object.assign({}, props, {pharmacie: pharmaciesFiltered})} loading={System.import('../pharmacies/phaDetail/PharmacieDetail')} />
    }} />

    <Route exact path='/laboratories' component={props => <AsyncRoute props={Object.assign({}, props, labs)} loading={System.import('../labs/labsWrapper/LabsWrapper')} />} />
    <Route exact path='/laboratories/:tag' component={props => {
      const labsFiltered = labs.labs.filter(lab => props.match.params.tag === lab.tag)
      return <AsyncRoute props={Object.assign({}, props, {labs: labsFiltered})} loading={System.import('../labs/labsMap/LabsGeneralMap')} />
    }} />
    <Route exact path='/laboratories/:tag/:id' component={props => {
      const labFiltered = labs.labs.filter(lab => props.match.params.id === lab._id)
      return <AsyncRoute props={Object.assign({}, props, {labs: labFiltered})} loading={System.import('../labs/labsDetail/LabsDetail')} />
    }} />

    <Route exact path='/hospitals' component={props => <AsyncRoute props={Object.assign({}, props, hospitals)} loading={System.import('../hospital/hosWrapper/HospitalWrapper')} />} />
    <Route exact path='/hospitals/:id' component={props => {
      const hospital = hospitals.hospitals.filter(hospital => props.match.params.id === hospital._id)
      return <AsyncRoute props={Object.assign({}, props, {hospital: hospital[0]})} loading={System.import('../hospital/hosDetail/HospialDetail')} />
    }} />

    <Route exact path='/map' component={() => <GeneralMap doctors={doctors} hospitals={hospitals} clinics={clinics} pharmacies={pharmacies} labs={labs} />} />
    <Route path='/categories' component={props => <AsyncRoute props={props} loading={System.import('../categorymenu/CatMenu')} />} />
    <Route path='/contact' component={props => <AsyncRoute props={props} loading={System.import('../contact/ContactForm')} />} />
    <Route path='/contact' component={props => <AsyncRoute props={props} loading={System.import('../contact/ContactForm')} />} />
    <Route component={props => <AsyncRoute props={props} loading={System.import('../notfound/NotFound')} />} />

  </Switch>
)

export default Routes
