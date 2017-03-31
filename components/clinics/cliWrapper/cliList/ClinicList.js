import React from 'react'
import {Col} from 'react-grid-system'
import {Link} from 'react-router-dom'
import styles from './ClinicList.css'

const ClinicList = ({clinic}) => (
  <div>
    <Col xs={12} sm={12} md={12} lg={4}>
      <div className={styles.back}>
        <h1 className={styles.h1}>
          <Link className={styles.link} to={`/clinics/${clinic._id}`}>
            {clinic.name}
          </Link>
        </h1>
        <Link to={`/clinics/${clinic._id}`}>
          <img
            className={styles.img}
            src={clinic.img}
          />
        </Link>
      </div>
    </Col>
  </div>
)

export default ClinicList
