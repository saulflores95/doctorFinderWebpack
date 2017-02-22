import React from 'react'
import DoctorList from './docList/DoctorList'

const DoctorWrapper = ({doctor}) => (
  <div>
    {doctor.length
    ? doctor.map(doctor => <DoctorList doctor={doctor} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default DoctorWrapper
