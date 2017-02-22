import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Row} from 'react-grid-system'
import styles from './CatMenu.css'

const hospitalImg = 'http://wildhunt.org/wp-content/uploads/2016/04/maxresdefault.jpg'
const pharmacieImg = 'http://1.bp.blogspot.com/-ieQbmNVAFIY/UIAz7tNDBJI/AAAAAAAAqNU/MtfSy_q9b4w/s1600/pharmacie.jpg'
const clinicImg = 'http://www.health-local.com/images/businesses/medium_crop/50884.jpg'
const labImg = 'https://www.qualitylaboratory.com/images/slider1.jpg'

const CatMenu = () => (
  <div>
    <Row>
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className={styles.back}>
          <h1 className={styles.h1}>
            <Link className={styles.link} to='/hospitals'>
              Hospitals
            </Link>
          </h1>
          <Link to='/hospitals'>
            <img
              className={styles.img}
              src={hospitalImg}
            />
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className={styles.back}>
          <h1 className={styles.h1}>
            <Link className={styles.link} to='/clinics'>
              Clinics
            </Link>
          </h1>
          <Link to='/clinics'>
            <img
              className={styles.img}
              src={clinicImg}
            />
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className={styles.back}>
          <h1 className={styles.h1}>
            <Link className={styles.link} to='/pharmacies'>
              Pharmacies
            </Link>
          </h1>
          <Link to='/pharmacies'>
            <img
              className={styles.img}
              src={pharmacieImg}
            />
          </Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className={styles.back}>
          <h1 className={styles.h1}>
            <Link className={styles.link} to='/laboratories'>
              Laboratories
            </Link>
          </h1>
          <Link to='/laboratories'>
            <img
              className={styles.img}
              src={labImg}
            />
          </Link>
        </div>
      </Col>
    </Row>
  </div>
)

export default CatMenu
