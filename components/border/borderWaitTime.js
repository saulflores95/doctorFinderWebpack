import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FaPhone from 'react-icons/lib/fa/phone'
import axios from 'axios'

export default class BorderWaitTime extends Component {
  constructor () {
    super()
    this.state = {
      borderData: ['Loading...']
    }
  }

  componentDidMount() {
    this.setState({
      borderData: this.props.times
    })
  }

  sanYsidroBorderTimes() {
    let SanYsidro_Car = this.props.times[2].description
    let SanYsidro_Ped = this.props.times[3].description

    /* Car Data    */
    let sanYsidroCarFilter = SanYsidro_Car.match(/([00-99])\w mi\w/g)
    let sanYsidroCar_Standard = sanYsidroCarFilter[0]
    let sanYsidroCar_Readylane = sanYsidroCarFilter[1]
    let sanYsidroCar_Sentri = sanYsidroCarFilter[2]
    /* Ped  Data    */
    let sanYsidroPedFilter = SanYsidro_Ped.match(/([00-99])\w mi\w/g)
    let sanYsidroPed_Standard = sanYsidroPedFilter[0]
    let sanYsidroPed_Readylane = sanYsidroPedFilter[1]
    let sanYsidroPed_Sentri = sanYsidroPedFilter[2]
    let SanYsidroBorderTimes = {
      car: {
        standard: sanYsidroCar_Standard,
        readyLane: sanYsidroCar_Readylane,
        sentri: sanYsidroCar_Sentri
      },
      ped: {
        standard: sanYsidroPed_Standard,
        readyLane: sanYsidroPed_Readylane,
        sentri: sanYsidroPed_Sentri
      }
    }

    return SanYsidroBorderTimes
  }


  otayBorderTimes() {
    let OtayData_Car = this.props.times[0].description
    let OtayData_Ped = this.props.times[1].description
    /* Car Data    */
    let Otay_Standard_Unfiltered_Car = OtayData_Car.substring(OtayData_Car.lastIndexOf("Standard")+1,OtayData_Car.lastIndexOf("Ready"));
    let Otay_StandardFilter_Car = Otay_Standard_Unfiltered_Car.substring(Otay_Standard_Unfiltered_Car.lastIndexOf("Standard")+1,Otay_Standard_Unfiltered_Car.lastIndexOf("Ready"));
    let Otay_Standard_Car = Otay_StandardFilter_Car.substring(Otay_StandardFilter_Car.lastIndexOf("PDT")+3,Otay_StandardFilter_Car.lastIndexOf("delay"));
    console.log('Otay Standard Car:', Otay_Standard_Car)
    let Otay_Readylane_Unfiltered_Car = OtayData_Car.substring(OtayData_Car.lastIndexOf("ReadyLane")+1,OtayData_Car.lastIndexOf("Sentri"));
    let Otay_ReadylaneFilter_Car = Otay_Readylane_Unfiltered_Car.substring(Otay_Readylane_Unfiltered_Car.lastIndexOf("Readylane: At")+1,Otay_Readylane_Unfiltered_Car.lastIndexOf("open"));
    let Otay_Readylane_Car = Otay_ReadylaneFilter_Car.substring(Otay_ReadylaneFilter_Car.lastIndexOf("PDT,")+4,Otay_ReadylaneFilter_Car.lastIndexOf("delay"));
    console.log('Otay Ready Lane Car:', Otay_Readylane_Car)
    let Otay_Sentri_Unfiltered_Car = OtayData_Car.substring(OtayData_Car.lastIndexOf("Sentri Lanes")+1,OtayData_Car.lastIndexOf("open Maximum"));
    let Otay_Sentri_Car = Otay_Sentri_Unfiltered_Car.substring(Otay_Sentri_Unfiltered_Car.lastIndexOf("PDT")+3,Otay_Sentri_Unfiltered_Car.lastIndexOf("lane")-2);
    console.log('Otay Sentri Car:', Otay_Sentri_Car)
    /* Ped  Data    */
    let Otay_Ped_Standard =  OtayData_Ped.substring(OtayData_Ped.lastIndexOf("Standard Lanes:")+32,OtayData_Ped.lastIndexOf("lane(s) open  Readylane")-2);
    console.log('Otay Standard Ped:', Otay_Ped_Standard)
    let Otay_Ped_Readylane = OtayData_Ped.substring(OtayData_Ped.lastIndexOf("Readylane: At")+28,OtayData_Ped.lastIndexOf("lane(s)")-4  );
    console.log('Otay Readlane Ped:', Otay_Ped_Readylane)

    let OtayBorderTimes = {
      car: {
        standard: Otay_Standard_Car,
        readyLane: Otay_Readylane_Car,
        sentri: Otay_Sentri_Car
      },
      ped: {
        standard: Otay_Ped_Standard,
        readyLane: Otay_Ped_Readylane
      }
    }

    return OtayBorderTimes
  }

  render () {
    let otayBorder = this.otayBorderTimes()
    let sanYsidroBorder = this.sanYsidroBorderTimes()
    console.log('Otay Border: ', otayBorder)
    console.log('San Ysidro:', sanYsidroBorder);
    return (
      <div className='borderTimes'>
        <h1>Otay - Car</h1>
        <h2>Standard: {otayBorder.car.standard}</h2>
        <h2>Readylane: {otayBorder.car.readyLane}</h2>
        <h2>Sentri: {otayBorder.car.sentri}</h2>
        <h1>Otay - Pedestrian</h1>
        <h2>Standard: {otayBorder.ped.standard}</h2>
        <h2>Readylane: {otayBorder.ped.readyLane}</h2>
        <h1>San Ysidro - Car</h1>
        <h2>Standard: {sanYsidroBorder.car.standard}</h2>
        <h2>Readylane: {sanYsidroBorder.car.readyLane}</h2>
        <h2>Sentri: {sanYsidroBorder.car.sentri}</h2>
        <h1>San Ysidro - Pedestrian</h1>
        <h2>Standard: {sanYsidroBorder.ped.standard}</h2>
        <h2>Readylane: {sanYsidroBorder.ped.readyLane}</h2>
        <h2>Sentri: {sanYsidroBorder.ped.sentri}</h2>

        <style jsx>{`
          .borderTimes {
            margin-bottom: 300px;
          }
        `}</style>
      </div>
    )
  }
}
