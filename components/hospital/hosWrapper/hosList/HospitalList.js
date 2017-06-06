import React from 'react'
import Link from 'next/link'
import {Col} from 'react-grid-system'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const HospitalList = ({hospital}) => (
  <div>
    <MuiThemeProvider>
      <List style={{padding: 0}}>
        <Link href={`/hospital-detail?id=${hospital._id}`} as={`/hospital-detail/${hospital._id}`}>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={hospital.img} />}
            primaryText={<div className='label'>{hospital.name}</div>}
            rightIcon={<ActionInfo style={{color: '#ef726f', fill: '#ef726f'}}/>}
            style={{marginTop:10, marginBottom:10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}}/>
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

export default HospitalList
