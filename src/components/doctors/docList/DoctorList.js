import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'
import injectTapEventPlugin from 'preact-tap-event-plugin'
injectTapEventPlugin()
const DoctorList = (props) => (
  <div>
    <MuiThemeProvider>
      <List>
        <Link to={`/doctors/${props._id}`}>
          <ListItem
            leftAvatar={<Avatar className='img-doctor' src={props.img} />}
            rightIcon={<ActionInfo className='img-svg' />}
            secondaryText={<div className='secondaryText'>{props.specialty}</div>}
            primaryText={<div className='primaryText'>{props.name}</div>}
            className='img-item'
          />
        </Link>
        <Divider inset />
      </List>
    </MuiThemeProvider>
  </div>
)

export default DoctorList
