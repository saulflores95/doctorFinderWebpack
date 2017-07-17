import React from 'react'
import {Row, Col} from 'react-grid-system'
import Checkbox from 'material-ui/Checkbox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ClinicSpeciality from './cliSpeciality/ClinicSpeciality'

const ClinicHeader = ({clinic}) => (
  <div style={{marginTop: 15}}>
    <Row>
      <Col sm={6} md={6} lg={4}>
        <img width='250' height='200' src={clinic.img} className='img' />
      </Col>
      <Col sm={6} md={6} lg={6} >
        <p className='detail-text'>{clinic.name}</p>
        <MuiThemeProvider>
          <Checkbox
            label='USA insurance'
            defaultChecked
            disabled />
        </MuiThemeProvider>
      </Col>
      <Col sm={12} md={12} lg={6}>
        <div style={{marginTop: 15}}>
          <ClinicSpeciality categories={clinic.categories} />
        </div>
      </Col>
    </Row>
    <style jsx>
      {`
      .detail-text {
        font-size: 20px;
        color: #2d517b;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
      }

      .img {
          margin-left: auto;
          margin-right: auto;
          display: block;
      }
    `}
    </style>
  </div>
)

export default ClinicHeader
