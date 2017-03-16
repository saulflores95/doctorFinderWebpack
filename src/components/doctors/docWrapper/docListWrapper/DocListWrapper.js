import React from 'react'
import styles from '../DoctorWrapper.css'
import SearchNav from '../../../MainLayout/UpperNavigation/searchNav/SearchNav'

const DoctorWrapper = ({doctor}) => (
  <div className={styles.wrapper}>
    <SearchNav props={doctor} identifier='doctor' />
  </div>
)

export default DoctorWrapper
