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
        <Row>
          <Col md={6} lg={6} xl={6}>
            <h1 className='title'>Otay - Car</h1>
            <div className='times'>
              <h2>Standard: {otayBorder.car.standard}</h2>
              <h2>Readylane: {otayBorder.car.readyLane}</h2>
              <h2>Sentri: {otayBorder.car.sentri}</h2>
            </div>
            <div className='times'>
              <h1 className='title'>Otay - Pedestrian</h1>
              <h2>Standard: {otayBorder.ped.standard}</h2>
              <h2>Readylane: {otayBorder.ped.readyLane}</h2>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6}>
            <h1 className='title'>San Ysidro - Car</h1>
            <div className='times'>
              <h2>Standard: {sanYsidroBorder.car.standard}</h2>
              <h2>Readylane: {sanYsidroBorder.car.readyLane}</h2>
              <h2>Sentri: {sanYsidroBorder.car.sentri}</h2>
            </div>
            <h1 className='title'>San Ysidro - Pedestrian</h1>
            <h2>Standard: {sanYsidroBorder.ped.standard}</h2>
            <h2>Readylane: {sanYsidroBorder.ped.readyLane}</h2>
            <h2>Sentri: {sanYsidroBorder.ped.sentri}</h2>
          </Col>
        </Row>
        <style jsx>{`
          .borderTimes {
            margin-bottom: 300px;
          }
          .title {
            text-align: center;
          }
          .times {
            text-align: justify;
          }
        `}</style>
      </div>
    )
  }
}
