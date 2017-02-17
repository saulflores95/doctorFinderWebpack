import React from 'react'
import {Col} from 'react-grid-system'
import styles from './LabsMainList.css'
import { Link } from 'react-router-dom'

const imageChooser = (props) => {
  if (props === 'Certus') {
    return 'https://www.ifbcertus.edu.pe/blog/wp-content/uploads/2016/09/blog_cover_certus.png'
  }
  if (props === 'Gamboa') {
    return 'https://pbs.twimg.com/profile_images/705493262472056832/i_GpO3EZ.jpg'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const LabsMainList = ({lab}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className={styles.back}>
      <a href={`/laboratories/${lab}`}>
        <img
          className={styles.img}
          src={imageChooser(lab)}
        />
      </a>
      <h1 className={styles.h1}>
        <Link className='link' to={`/laboratories/${lab}`}>
          {lab}
        </Link>
      </h1>
    </div>
  </Col>
)

export default LabsMainList
