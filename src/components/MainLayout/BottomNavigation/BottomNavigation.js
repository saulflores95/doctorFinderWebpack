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
          <BottomNavigation selectedIndex={this.state.selectedIndex} className='bottom'>
            <BottomNavigationItem
              icon={<FaUserMd className='icon-pixel' />}
              onClick={() => this.select(0)}
              className={styles.bottomNavItem}
              href='/doctors'
            />
            <BottomNavigationItem
              icon={<FaHeartbeat className='icon-pixel' />}
              onClick={() => this.select(1)}
              className={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaPlusSquare className='icon-pixel' />}
              onClick={() => this.select(2)}
              className={styles.bottomNavItem}
              href='/pharmacies'
            />
            <BottomNavigationItem
              icon={<FaHospitalO className='icon-pixel' />}
              onClick={() => this.select(3)}
              className={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<FaFlask className='icon-pixel' />}
              onClick={() => this.select(4)}
              className={styles.bottomNavItem}
            />
            <BottomNavigationItem
              icon={<IconLocationOn className='icon-pixel' />}
              onClick={() => this.select(5)}
              className={styles.bottomNavItem}
            />
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    )
  }
}
