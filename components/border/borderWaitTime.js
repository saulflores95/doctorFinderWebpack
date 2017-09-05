import React, { Component } from 'react'
import { Col, Row } from 'react-grid-system'

export default class BorderWaitTime extends Component {
  constructor () {
    super()
    this.state = {
      borderData: ['Loading...']
    }
  }

  componentDidMount () {
    this.setState({
      borderData: this.props.times
    })
  }

  validator (props) {
    if (props == null) {
      props = ['no delay']
      return props
    }
    return props
  }

  sanYsidroBorderTimes () {
    let sanYsidroCar = this.props.times[2].description
    let sanYsidroPed = this.props.times[3].description
    /* Car Data    */
    let sanYsidroCarFilter = this.validator(sanYsidroCar.match(/([00-99])\w mi\w/g))
    let sanYsidroCarStandard = this.validator(sanYsidroCarFilter[0])
    let sanYsidroCarReadylane = this.validator(sanYsidroCarFilter[1])
    let sanYsidroCarSentri = this.validator(sanYsidroCarFilter[2])

    /* Ped  Data   */

    let sanYsidroPedFilter = this.validator(sanYsidroPed.match(/([00-99])\w mi\w/g))
    let sanYsidroPedStandard = this.validator(sanYsidroPedFilter[0])
    let sanYsidroPedReadylane = this.validator(sanYsidroPedFilter[1])
    let sanYsidroPedSentri = this.validator(sanYsidroPedFilter[2])
    let SanYsidroBorderTimes = {
      car: {
        standard: sanYsidroCarStandard,
        readyLane: sanYsidroCarReadylane,
        sentri: sanYsidroCarSentri
      },
      ped: {
        standard: sanYsidroPedStandard,
        readyLane: sanYsidroPedReadylane,
        sentri: sanYsidroPedSentri
      }
    }

    return SanYsidroBorderTimes
  }

  otayBorderTimes () {
    let otayDataCar = this.props.times[0].description
    let otayDataPed = this.props.times[1].description
    /* Car Data    */
    let otayCarFilter = this.validator(otayDataCar.match(/([00-99])\w mi\w/g))
    let otayCarStandard = this.validator(otayCarFilter[0])
    let otayCarReadylane = this.validator(otayCarFilter[1])
    let otayCarSentri = this.validator(otayCarFilter[2])

    /* Ped  Data    */
    let otayPedFilter = this.validator(otayDataPed.match(/([00-99])\w mi\w/g))
    let otayPedStandard = this.validator(otayPedFilter[0])
    let otayPedReadylane = this.validator(otayPedFilter[1])

    let OtayBorderTimes = {
      car: {
        standard: otayCarStandard,
        readyLane: otayCarReadylane,
        sentri: otayCarSentri
      },
      ped: {
        standard: otayPedStandard,
        readyLane: otayPedReadylane
      }
    }
    return OtayBorderTimes
  }

  render () {
    let otayBorder = this.otayBorderTimes()
    let sanYsidroBorder = this.sanYsidroBorderTimes()
    return (
      <div className='borderTimes'>
        <h3 className='border-text'>Border Wait</h3>
        <Row>
          <div className='div-row'>
            <Col xs={12} ms={12} md={6} lg={6} xl={6} style={{padding: 0}}>
              <h3 className='title'>Otay - Car</h3>
              <div className='times'>
                <p>Standard: {otayBorder.car.standard}</p>
                <p>Readylane: {otayBorder.car.readyLane}</p>
                <p>Sentri: {otayBorder.car.sentri}</p>
              </div>
              <div className='times'>
                <h3 className='title'>Otay - Pedestrian</h3>
                <p>Standard: {otayBorder.ped.standard}</p>
                <p>Readylane: {otayBorder.ped.readyLane}</p>
              </div>
            </Col>
            <Col xs={12} ms={12} md={6} lg={6} xl={6} style={{padding: 0}}>
              <h3 className='title'>San Ysidro - Car</h3>
              <div className='times'>
                <p>Standard: {sanYsidroBorder.car.standard}</p>
                <p>Readylane: {sanYsidroBorder.car.readyLane}</p>
                <p>Sentri: {sanYsidroBorder.car.sentri}</p>
              </div>
              <h3 className='title'>San Ysidro - Pedestrian</h3>
              <p>Standard: {sanYsidroBorder.ped.standard}</p>
              <p>Readylane: {sanYsidroBorder.ped.readyLane}</p>
              <p>Sentri: {sanYsidroBorder.ped.sentri}</p>
            </Col>
          </div>
        </Row>
        <style jsx>{`
          .div-row {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 50%;
            height: 100%;
          }
          .title {
            text-align: center;
            color: #2d517b !important;
            font-family: 'Montserrat', sans-serif;
          }
          .times {
            text-align: justify;
          }
          p {
            color: #2d517b !important;
            font-family: 'Montserrat', sans-serif;
            text-align: center;
          }
          .border-text {
            text-align: center;
            color: #2d517b !important;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </div>
    )
  }
}
