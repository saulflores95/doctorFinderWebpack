import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaUserMd from 'react-icons/lib/fa/user-md'
import FaPlus from 'react-icons/lib/fa/plus'
import styles from './BottomNavigation.css'
import injectTapEventPlugin from 'preact-tap-event-plugin'
import {Link} from 'react-router-dom'
injectTapEventPlugin()

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
            <Link to='/doctors'>
              <BottomNavigationItem
                icon={<FaUserMd className={styles.icon} />}
                onTouchTap={() => this.select(0)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='/hospitals'>
              <BottomNavigationItem
                icon={<FaHospitalO className={styles.icon} />}
                onClick={() => this.select(1)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='map'>
              <BottomNavigationItem
                icon={<IconLocationOn className={styles.icon} />}
                onClick={() => this.select(2)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='info'>
              <BottomNavigationItem
                icon={<FaPlus className={styles.icon} />}
                onClick={() => this.select(3)}
                className={styles.bottomNavItem}
              />
            </Link>
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    )
  }
}
