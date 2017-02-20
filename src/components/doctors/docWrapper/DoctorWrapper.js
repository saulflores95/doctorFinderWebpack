import React from 'react'
import DoctorList from './docList/DoctorList'
import styles from './DoctorWrapper.css'

const DoctorWrapper = ({doctors}) => (
  <div className={styles.doctorContainer}>
    {doctors.length
    ? doctors.map(doctor => <DoctorList key={doctor._id} {...doctor} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default DoctorWrapper
