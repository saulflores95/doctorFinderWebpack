import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'react-grid-system'
import styles from './HospitalList.css'

const HospitalList = ({hospital}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className={styles.back}>
      <h1 className={styles.h1}>
        <Link className={styles.link} to={`/hospitals/${hospital._id}`}>
          {hospital.name}
        </Link>
      </h1>
      <Link to={`/hospitals/${hospital._id}`}>
        <img
          className={styles.img}
          src={hospital.img}
        />
      </Link>
    </div>
  </Col>
)

export default HospitalList
