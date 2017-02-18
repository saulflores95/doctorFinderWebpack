import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaHeartbeat from 'react-icons/lib/fa/heartbeat'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaFlask from 'react-icons/lib/fa/flask'
import FaUserMd from 'react-icons/lib/fa/user-md'
import styles from './BottomNavigation.css'

export default class ButtomNavigationComponet extends Component {
  constructor () {
    super()

    this.state = {
      selectedIndex: 0
    }
  }

  select (index) {
    return this.setState({selectedIndex: index})
  }

  render () {
    return (
      <div className={styles.footer}>
        <MuiThemeProvider>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              icon={<FaUserMd className={styles.icon} />}
              onClick={() => this.select(0)}
              href='/doctors'
              className={styles.bottomNavItem}
              href='/'
            />
            <BottomNavigationItem
              icon={<FaHeartbeat className={styles.icon} />}
              onClick={() => this.select(1)}
              href='/clinics'
              className={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaPlusSquare className={styles.icon} />}
              onClick={() => this.select(2)}
              href='/pharmacies'
              className={styles.bottomNavItem}
              href='/pharmacies'
            />
            <BottomNavigationItem
              icon={<FaHospitalO className={styles.icon} />}
              onClick={() => this.select(3)}
              href='/hospital'
              className={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaFlask className={styles.icon} />}
              onClick={() => this.select(4)}
              href='/laboratories'
              className={styles.bottomNavItem}
              href='/laboratories'
            />
            <BottomNavigationItem
              icon={<IconLocationOn className={styles.icon} />}
              onClick={() => this.select(5)}
              href='/map'
              className={styles.bottomNavItem}
            />
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    )
  }
}
