import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import NewUpperNavigation from '../MainLayout/UpperNavigation/newUpperNavigation/NewUpperNavigation'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import styles from './App.css'

const App = () => (
  <div>
    <div>
      <header>
        <NewUpperNavigation />
      </header>
    </div>
    <Router>
      <div>
        <div className={styles.container}>
          <Routes />
        </div>
        <footer>
          <BottomNavigationComponent />
        </footer>
      </div>
    </Router>
  </div>

)

export default App
