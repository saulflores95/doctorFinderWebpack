import React from 'react'
import {Row} from 'react-grid-system'
import ClinicList from './cliList/ClinicList'
import styles from './ClinicWrapper.css'

const ClinicWrapper = ({clinics}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      <Row>
        {clinics.length
          ? clinics.map(clinic => <ClinicList key={clinic._id} clinic={clinic} />) : <p>Awaiting clinics</p>
        }
      </Row>
    </div>
  </div>
)

export default ClinicWrapper
