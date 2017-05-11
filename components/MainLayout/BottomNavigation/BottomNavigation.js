import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaUserMd from 'react-icons/lib/fa/user-md'
import FaPlus from 'react-icons/lib/fa/plus'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'
import Link from 'next/link'

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
    var styles = {
      icon: {
        height: 24,
        textAlign: 'center',
        color: 'white'
      },
      bottomNavItem: {
        marginLeft: 'auto',
        marginRight: 'auto',
        minWidth: 80,
        maxWidth: 80,
        display: 'block'
      },
      buttonNav: {
        backgroundColor: '#192e48'
      }
    }
    return (
      <div className='footer'>
        <MuiThemeProvider>
          <BottomNavigation selectedIndex={this.state.selectedIndex} style={styles.buttonNav}>
            <Link href='/'>
              <BottomNavigationItem
                icon={<FaUserMd style={styles.icon} />}
                onClick={() => this.select(0)}
                style={styles.bottomNavItem}
              />
            </Link>
            <Link href='/categories'>
              <BottomNavigationItem
                icon={<FaHospitalO style={styles.icon} />}
                onClick={() => this.select(1)}
                style={styles.bottomNavItem}
              />
            </Link>
            <Link href='/map'>
              <BottomNavigationItem
                icon={<FaMapMarker style={styles.icon} />}
                onClick={() => this.select(2)}
                style={styles.bottomNavItem}
              />
            </Link>
            <Link href='/contact-us'>
              <BottomNavigationItem
                icon={<FaPlus style={styles.icon} />}
                onClick={() => this.select(3)}
                style={styles.bottomNavItem}
              />
            </Link>
          </BottomNavigation>
        </MuiThemeProvider>
      </div>
    )
  }
}
