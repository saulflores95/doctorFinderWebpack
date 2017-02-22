import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'
import injectTapEventPlugin from 'preact-tap-event-plugin'
import styles from './DoctorList.css'
injectTapEventPlugin()
const DoctorList = ({doctor}) => (
  <div>
    <MuiThemeProvider>
      <List>
        <Link to={`/doctors/${doctor.specialty}/${doctor._id}`}>
          <ListItem
            leftAvatar={<Avatar className={styles.doctor} src={doctor.img} />}
            rightIcon={<ActionInfo />}
            secondaryText={<div className={styles.label}>{doctor.specialty}</div>}
            primaryText={<div className={styles.label}>{doctor.name}</div>}
          />
        </Link>
        <Divider inset />
      </List>
    </MuiThemeProvider>
  </div>
)

export default DoctorList
