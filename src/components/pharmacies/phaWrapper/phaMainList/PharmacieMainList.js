import React from 'react'
import {Col} from 'react-grid-system'
import styles from './PharmacieMainList.css'
import { Link } from 'react-router-dom'

const imageChooser = (props) => {
  if (props === 'Roma') {
    return 'http://www.lacronica.com/Edicionenlinea/Fotos/Noticias/1138343-N.JPG'
  }
  if (props === 'farmacia') {
    return 'http://toma-control.com/wp-content/themes/cronadyn/images/puntos-de-venta/benavides.png'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const PharmacieMainList = ({pharmacie}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className={styles.back}>
      <h1 className={styles.h1}>
        <Link className={styles.link} to={`/pharmacies/${pharmacie}`}>
          {pharmacie}
        </Link>
      </h1>
      <Link to={`/pharmacies/${pharmacie}`}>
        <img
          className={styles.img}
          src={imageChooser(pharmacie)}
        />
      </Link>
    </div>
  </Col>
)

export default PharmacieMainList
