import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaUserMd from 'react-icons/lib/fa/user-md'
import FaPlus from 'react-icons/lib/fa/plus'
if (process.env.BROWSER) {
  var styles = require('./BottomNavigation.css')
}
import {Link} from 'react-router-dom'

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
                onClick={() => this.select(0)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='/categories'>
              <BottomNavigationItem
                icon={<FaHospitalO className={styles.icon} />}
                onClick={() => this.select(1)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='/map'>
              <BottomNavigationItem
                icon={<IconLocationOn className={styles.icon} />}
                onClick={() => this.select(2)}
                className={styles.bottomNavItem}
              />
            </Link>
            <Link to='/contact'>
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
