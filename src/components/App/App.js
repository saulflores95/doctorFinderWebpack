import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import NewUpperNavigation from '../MainLayout/UpperNavigation/newUpperNavigation/NewUpperNavigation'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import styles from './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const App = () => (
  <div>
    <Router>
      <div>
        <div className={styles.container}>
          <header>
            <NewUpperNavigation />
          </header>
          <div>
            <Routes location={location} />
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
