import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaUserMd from 'react-icons/lib/fa/user-md'
import FaPlus from 'react-icons/lib/fa/plus'
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
    return (
      <div className='footer'>
        <MuiThemeProvider>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <Link to='/doctors'>
              <BottomNavigationItem
                icon={<FaUserMd className='icon' />}
                onClick={() => this.select(0)}
                className='bottomNavItem'
              />
            </Link>
            <Link to='/categories'>
              <BottomNavigationItem
                icon={<FaHospitalO className='icon' />}
                onClick={() => this.select(1)}
                className='bottomNavItem'
              />
            </Link>
            <Link to='/map'>
              <BottomNavigationItem
                icon={<IconLocationOn className='icon' />}
                onClick={() => this.select(2)}
                className='bottomNavItem'
              />
            </Link>
            <Link to='/contact'>
              <BottomNavigationItem
                icon={<FaPlus className='icon' />}
                onClick={() => this.select(3)}
                className='bottomNavItem'
              />
            </Link>
          </BottomNavigation>
        </MuiThemeProvider>
        <style jsx>
          {`
            .footer {
              left: 0;
              right: 0;
              bottom: 0;
            }

            .icon {
              text-align: center;
              font-size: 24px;
            }

            .prueba {
              width: 40px;
            }

            .bottomNavItem {
              margin-left: auto !important;
              margin-right: auto !important;
              display: block !important;
            }
          `}
        </style>
      </div>
    )
  }
}
