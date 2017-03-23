import React from 'react'
import DoctorList from './docList/DoctorList'
import styles from '../DoctorWrapper.css'

const DoctorWrapper = ({doctor}) => (
  <div className={styles.wrapper}>
    {doctor.length
    ? doctor.map(doctor => <DoctorList key={doctor._id} doctor={doctor} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default DoctorWrapper
