import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Link from 'next/link'

const LabsListItem = (lab) => (
  <div>
    <MuiThemeProvider>
      <Link href={`/laboratories-detail?id=${lab._id}`} as={`/laboratories-detail/${lab._id}`}>
        <List style={{padding: 0}}>
          <ListItem
            leftAvatar={<Avatar className='img-labSingle' src={lab.img} />}
            rightIcon={<ActionInfo className='icon-pharmacie' style={{color: '#ef726f', fill: '#ef726f'}} />}
            primaryText={<div className='lab-primaryText'>{lab.name}</div>}
            style={{marginTop: 10, marginBottom: 10}}
          />
          <Divider inset style={{backgroundColor: '#57c6df'}} />
        </List>
      </Link>
    </MuiThemeProvider>
    <style jsx>
      {`
        .img-labSingle {
          width: 45px !important;
          height: 45px !important;
        }

        .lab-primaryText {
          font-size: 18px;
          color: #2d517b !important;
          font-family: 'Montserrat', sans-serif;
        }

      `}
    </style>
  </div>
)

export default LabsListItem
