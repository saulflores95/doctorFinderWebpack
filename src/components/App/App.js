import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../routes/Routes'
//  import SearchBar from '../MainLayout/UpperNavigation/newUpperNavigation/SearchBar'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import styles from './App.css'

const App = () => (
  <div>
    <Router>
      <div>
        <div className={styles.container}>
          <div>
            <Routes />
          </div>
        </div>
        <footer>
          <BottomNavigationComponent />
        </footer>
      </div>
    </Router>
  </div>
)

export default App
