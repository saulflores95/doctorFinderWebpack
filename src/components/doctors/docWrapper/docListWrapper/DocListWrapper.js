import React from 'react'
import styles from '../DoctorWrapper.css'
import SearchBar from '../../../MainLayout/searchBar/SearchBar'

const DoctorWrapper = ({doctor}) => (
  <div className={styles.wrapper}>
    <SearchBar props={doctor} identifier='doctor' />
  </div>
)

export default DoctorWrapper
