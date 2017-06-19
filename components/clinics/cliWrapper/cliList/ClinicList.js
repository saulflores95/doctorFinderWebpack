import React from 'react'
import Link from 'next/link'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const ClinicList = ({clinic}) => (
  <div>
    <MuiThemeProvider>
      <List style={{padding: 0}}>
        <Link prefetch href={`/clinic-detail?id=${clinic._id}`} as={`/clinic-detail/${clinic._id}`}>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={clinic.img} />}
            primaryText={<div className='label'>{clinic.name}</div>}
            rightIcon={<ActionInfo style={{color: '#ef726f', fill: '#ef726f'}} />}
            style={{marginTop: 10, marginBottom: 10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}} />
      </List>
    </MuiThemeProvider>
    <style jsx>
      {`
        .avatar {
          width: 45px !important;
          height: 45px !important;
        }

        .label {
          font-size: 18px;
          color: #2d517b !important;
          font-family: 'Montserrat', sans-serif;
        }

      `}
    </style>
  </div>
)

export default ClinicList
