import React from 'react'
import styles from './NewUpperNavigation.css'
import { Link } from 'react-router-dom'

const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg'
const NewUpperNavigation = () => (
  <div className={styles.container}>
    <ul className={styles.ul}>
      <li className={styles.li}><Link to='/'><img alt='Healthcare Baja' src={imgUrl} /></Link></li>
    </ul>
  </div>
)

export default NewUpperNavigation
