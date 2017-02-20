import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import DoctorMap from './docMap/DoctorMap'
import {Container} from 'react-grid-system'

import styles from './DoctorDetail.css'

const DoctorDetail = (doctor) => (
  <div className={styles.doctorDetailWrapper}>
    <Container>
      <DoctorHeader {...doctor.doctor} />
      <DoctorDescription doctor={doctor.doctor} />
      <DoctorContactForm {...doctor.doctor} />
      <DoctorMap {...doctor.doctor} />
    </Container>
  </div>
)

export default DoctorDetail
