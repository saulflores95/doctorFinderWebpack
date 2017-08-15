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

  dataFilter() {
    let data = this.props.times[0].description
    //console.log(data)
    let standard = data.substring(data.lastIndexOf("Standard")+1,data.lastIndexOf("Ready"));
    console.log(standard)
    let readyLane = ''
    let sentri = ''
  }

  render () {
    return (
      <div>
        <h1>Cool</h1>
        {this.dataFilter(this)}
      </div>
    )
  }
}
