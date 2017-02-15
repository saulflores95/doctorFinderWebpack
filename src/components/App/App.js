import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import UpperNavigation from '../MainLayout/UpperNavigation/UpperNavigation'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import styles from './App.css'

const App = () => (
  <div>
    <header>
      <UpperNavigation />
    </header>
    <Router>
      <div className={styles.container}>
        <Routes />
      </div>
    </Router>
    <footer>
      <BottomNavigationComponent />
    </footer>
  </div>

)

export default App
