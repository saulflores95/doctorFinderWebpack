import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import DoctorMap from './docMap/DoctorMap'

const DoctorDetail = (doctor) => (
  <div>
    <DoctorHeader {...doctor.doctor} />
    <DoctorDescription doctor={doctor.doctor} />
    <DoctorContactForm {...doctor.doctor} />
    <DoctorMap {...doctor.doctor} />

  </div>
)

export default DoctorDetail
