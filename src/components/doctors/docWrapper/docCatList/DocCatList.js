import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import injectTapEventPlugin from 'preact-tap-event-plugin'
import styles from '../docListWrapper/docList/DoctorList.css'
injectTapEventPlugin()
const DocCatList = ({specialty}) => (
  <div>
    <MuiThemeProvider>
      <List>
        <Link to={`/doctors/${specialty}`}>
          <ListItem
            rightIcon={<ActionInfo />}
            secondaryText={<div className={styles.label}>{specialty}</div>}
          />
        </Link>
        <Divider inset />
      </List>
    </MuiThemeProvider>
  </div>
)

export default DocCatList
