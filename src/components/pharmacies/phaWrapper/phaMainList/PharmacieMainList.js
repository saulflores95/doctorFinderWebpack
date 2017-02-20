import React from 'react'
import {Col} from 'react-grid-system'
import styles from './PharmacieMainList.css'
import { Link } from 'react-router-dom'

const imageChooser = (props) => {
  if (props === 'Roma') {
    return 'http://zetatijuana.com/wp-content/uploads/2016/02/farmacias-roma-1.jpg'
  }
  if (props === 'farmacia') {
    return 'http://toma-control.com/wp-content/themes/cronadyn/images/puntos-de-venta/benavides.png'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const PharmacieMainList = ({pharmacie}) => (
  <div className={styles.pharmacieWrapper}>
    <Col xs={12} sm={12} md={12} lg={4}>
      <div className={styles.back}>
        <a href={`/pharmacies/${pharmacie}`}>
          <img
            className={styles.img}
            src={imageChooser(pharmacie)}
          />
        </a>
        <h1 className={styles.h1}>
          <Link className='link' to={`/pharmacies/${pharmacie}`}>
            {pharmacie}
          </Link>
        </h1>
      </div>
    </Col>
  </div>
)

export default PharmacieMainList
