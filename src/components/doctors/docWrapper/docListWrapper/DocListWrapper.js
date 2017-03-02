import React from 'react'
import DoctorList from './docList/DoctorList'
import styles from '../DoctorWrapper.css'
import { RouteTransition } from 'react-router-transition'

const DoctorWrapper = ({doctor}) => (
  <div className={styles.wrapper}>
    <RouteTransition
      pathname={`/doctors/${doctor.specialty}/${doctor._id}`}
      atEnter={{ translateX: 50, opacity: 0 }}
      atLeave={{ translateX: -50, opacity: 0 }}
      atActive={{ translateX: 0, opacity: 1 }}
      mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: styles.opacity })}
      >
      {doctor.length
      ? doctor.map(doctor => <DoctorList doctor={doctor} />) : <p>Awaiting Doctors</p>
      }
    </RouteTransition>
  </div>
)

export default DoctorWrapper
