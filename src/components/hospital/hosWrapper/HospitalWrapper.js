import React from 'react'
import HospitalList from './hosList/HospitalList'
import {Row} from 'react-grid-system'
import styles from './HospitalWrapper.css'

const HospitalWrapper = ({hospitals}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      <Row>
        {hospitals.length
        ? hospitals.map(hospital => <HospitalList key={hospital._id} hospital={hospital} />) : <p>Awaiting HospitalL</p>
        }
      </Row>
    </div>
  </div>
)

export default HospitalWrapper
