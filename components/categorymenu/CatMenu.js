import React from 'react'
import Link from 'next/link'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FaHospitalO from 'react-icons/lib/fa/hospital-o'
import FaEyedropper from 'react-icons/lib/fa/eyedropper'
import FaHeartbeat from 'react-icons/lib/fa/heartbeat'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
const hospitalImg = 'https://pbs.twimg.com/media/C7cRX8xX4AA6DJX.jpg'
const pharmacieImg = 'https://www.fasola.jp/search/floor-map/no3/img/pic-drugstore.jpg'
const clinicImg = 'https://www.scripps.org/sparkle-assets/images/scripps-clinic-del-mar-1300-x-800.jpg'
const labImg = 'https://www.qualitylaboratory.com/images/slider1.jpg'

const CatMenu = () => (
  <div className='wrapper'>
    <MuiThemeProvider>
      <List>
        <Link prefetch href='/hospitals'>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={hospitalImg} />}
            primaryText={<div className='label'>Hospitals</div>}
            rightIcon={<FaHospitalO style={{color: '#ef726f', fill: '#ef726f'}} />}
            style={{marginTop: 10, marginBottom: 10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}} />
        <Link prefetch href='/clinics'>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={clinicImg} />}
            primaryText={<div className='label'>Clinics</div>}
            rightIcon={<FaHeartbeat style={{color: '#ef726f', fill: '#ef726f'}} />}
            style={{marginTop: 10, marginBottom: 10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}} />
        <Link prefetch href='/pharmacies'>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={pharmacieImg} />}
            primaryText={<div className='label'>Pharmacies</div>}
            rightIcon={<FaPlusSquare style={{color: '#ef726f', fill: '#ef726f'}} />}
            style={{marginTop: 10, marginBottom: 10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}} />
        <Link prefetch href='/laboratories'>
          <ListItem
            leftAvatar={<Avatar className='avatar' src={labImg} />}
            primaryText={<div className='label'>Laboratories</div>}
            rightIcon={<FaEyedropper style={{color: '#ef726f', fill: '#ef726f'}} />}
            style={{marginTop: 10, marginBottom: 10}}
          />
        </Link>
        <Divider inset style={{backgroundColor: '#57c6df'}} />
      </List>
    </MuiThemeProvider>
    <style jsx>
      {`
      .label{
        font-size: 18px;
        color: #2d517b !important;
        font-family: 'Montserrat', sans-serif;
      }

      .avatar {
        width: 45px !important;
        height: 45px !important;
      }
    `}
    </style>
  </div>
)

export default CatMenu
