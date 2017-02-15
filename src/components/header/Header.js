import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>PWA SEED</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link className={styles.link} to='/'> Home </Link></li>
          <li className={styles.listItem}><Link className={styles.link} to='/about'> About </Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
