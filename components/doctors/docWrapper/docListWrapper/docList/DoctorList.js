import React from 'react'
import Link from 'next/link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'
const DoctorList = ({doctor}) => (
  <div>
    <MuiThemeProvider>
      <List>
        <Link href={`/doctor-detail?id=${doctor._id}`} as={`/doctor-detail/${doctor._id}`}>
          <ListItem
            leftAvatar={<Avatar className='doctor' alt={doctor.name} src={doctor.img} />}
            rightIcon={<ActionInfo />}
            secondaryText={<div className='label2'>{doctor.specialty}</div>}
            primaryText={<div className='label'>{doctor.name}</div>}
          />
        </Link>
        <Divider inset />
      </List>
    </MuiThemeProvider>
    <style jsx>
      {`
        .label {
          font-size: 16px;
          color: white !important;
          font-family: 'Montserrat', sans-serif;
        }

        .doctor {
          width: 45px !important;
          height: 45px !important ;
        }

        .label2 {
          font-size: 16px;
          color: white !important;
        }


        .pageSlider-enter {
          transform: translate3d(100%, 0, 0);
        }

        .pageSlider-enter.pageSlider-enter-active {
          transform: translate3d(0, 0, 0);
          transition: all 600ms;
        }
      `}
    </style>
  </div>
)

export default DoctorList
