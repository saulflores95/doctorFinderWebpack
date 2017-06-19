import React from 'react'
import Link from 'next/link'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const imageChooser = (props) => {
  if (props === 'Roma') {
    return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/roma.jpg'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const PharmacieMainList = ({pharmacie}) => (
  <div>
    <MuiThemeProvider>
      <List style={{padding: 0}}>
        <Link prefetch href={`/pharmacie-map?id=${pharmacie}`} as={`/pharmacie-map/${pharmacie}`}>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={imageChooser(pharmacie)} />}
            primaryText={<div className='label'>{pharmacie}</div>}
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

export default PharmacieMainList
