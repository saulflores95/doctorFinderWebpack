import React from 'react'
import Link from 'next/link'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const imageChooser = (props) => {
  if (props === 'Certus') {
    return 'https://www.ifbcertus.edu.pe/blog/wp-content/uploads/2016/09/blog_cover_certus.png'
  }
  if (props === 'Gamboa') {
    return 'https://pbs.twimg.com/profile_images/705493262472056832/i_GpO3EZ.jpg'
  }
  if (props === 'Imagen Radiológica Integral') {
    return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/IRI.jpg'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const LabsMainList = ({lab}) => (
  <div>
    <MuiThemeProvider>
      <List style={{padding: 0}}>
        <Link prefetch href={`/laboratorie?id=${lab}`} as={`/laboratorie/${lab}`}>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={imageChooser(lab)} />}
            primaryText={<div className='label'>{lab}</div>}
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

export default LabsMainList
