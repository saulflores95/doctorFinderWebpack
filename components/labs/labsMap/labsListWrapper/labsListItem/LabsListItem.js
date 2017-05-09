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
        <List>
          <ListItem
            leftAvatar={<Avatar className='img-pharmacieSingle' src={lab.img} />}
            rightIcon={<ActionInfo className='icon-pharmacie' />}
            primaryText={<div className='pharmacie-primaryText'>{lab.name}</div>}
            className='pharmacieList-item'
          />
          <Divider inset />
        </List>
      </Link>
    </MuiThemeProvider>
  </div>
)

export default LabsListItem
