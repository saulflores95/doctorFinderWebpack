import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import styles from './UpperNavigation.css'
import injectTapEventPlugin from 'preact-tap-event-plugin'
injectTapEventPlugin()
const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg'
const UpperNavigation = () => (
  <div>
    <MuiThemeProvider>
      <AppBar
        title=''
        className={styles.appbar}
        iconElementLeft={<a href='/'><img src={imgUrl} /></a>}
        iconElementRight={
          <IconMenu
            iconButtonElement={<MoreVertIcon className={styles.icon} />}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem className='menu-item' href='/registermd' primaryText='Add Doctor' />
            <MenuItem className='menu-item' href='/pharmaciesRegistration' primaryText='Add Pharmacie' />
            <MenuItem className='menu-item' href='/registerClinic' primaryText='Add Clinic' />
            <MenuItem className='menu-item' href='/HospitalRegistration' primaryText='Add Hospital' />
            <MenuItem className='menu-item' href='/laboratoriesRegistration' primaryText='Add Laboratory' />
          </IconMenu>
        }
      />
    </MuiThemeProvider>
  </div>
)

export default UpperNavigation
