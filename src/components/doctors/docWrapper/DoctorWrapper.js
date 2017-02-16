import React from 'react'
import DoctorList from './docList/DoctorList'

const DoctorWrapper = ({doctors}) => (
  <div>
    {doctors.length
    ? doctors.map(doctor => <DoctorList key={doctor._id} {...doctor} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default DoctorWrapper
