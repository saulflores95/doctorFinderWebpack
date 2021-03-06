import React from 'react'
import DoctorExp from './docExp/DoctorExp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Row, Col} from 'react-grid-system'
import Checkbox from 'material-ui/Checkbox'

const DoctorHeader = (doctor) => (
  <div>
    <MuiThemeProvider>
      <div className='doctorHeaderContainer'>
        <Row>
          <Col sm={6} md={6} lg={2}>
            <img alt={doctor[0].name} className='img' src={doctor[0].img} />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <h1 className='doctor-name'>{doctor[0].name}</h1>
            <span className='label'>{doctor[0].specialty}</span>
            <MuiThemeProvider>
              <Checkbox
                label='USA insurance'
                defaultChecked={doctor[0].insurance}
                disabled
                style={{marginTop: 15}} />
            </MuiThemeProvider>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <DoctorExp doctor={doctor[0]} />
          </Col>
        </Row>
      </div>
    </MuiThemeProvider>
    <style jsx>
      {`
        .doctorHeaderContainer{
          height:200;
          padding-top: 75;
          padding-bottom:75;
          color:white;
        }

        .img {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .label {
          font-size: 16px;
          color: #ef726f;
          font-family: 'Montserrat', sans-serif;
        }

        .doctor-name {
          font-size: 16px;
          color: #2d517b;
          font-weight: bold;
          font-family: 'Montserrat', sans-serif;
        }

        .divider {
          padding-top: 25;
        }
      `}
    </style>
  </div>
)

export default DoctorHeader
