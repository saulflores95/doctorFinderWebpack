import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../routes/Routes'
import UpperNavigationFilter from '../MainLayout/UpperNavigation/UpperNavigationFilter'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import styles from './App.css'

const App = () => (
  <div className={styles.wrapperHeight}>
    <Router>
      <div className={styles.container}>
        <header>
          <UpperNavigationFilter />
        </header>
        <div className={styles.wrapperHeight2}>
          <Routes />
        </div>
        <footer className={styles.footer}>
          <BottomNavigationComponent />
        </footer>
      </div>
    </Router>
  </div>
)

export default App
